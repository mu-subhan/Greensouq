

"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

interface Song {
  id: string;
  songName: string;
  artist: string | null;
  isFavorite: boolean;
  createdAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [songs, setSongs] = useState<Song[]>([]);
  const [loadingSongs, setLoadingSongs] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    songName: "",
    artist: ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      fetchSongs();
    }
  }, [session, status, router]);

  const fetchSongs = async () => {
    try {
      const res = await fetch("/api/favorites");
      const data = await res.json();
      
      if (res.ok) {
        setSongs(data.songs || []);
      }
    } catch (error) {
      console.error("Failed to load songs");
    } finally {
      setLoadingSongs(false);
    }
  };

  const handleAddSong = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Song added! 🎵");
        setFormData({ songName: "", artist: "" });
        setShowAddForm(false);
        fetchSongs();
      } else {
        toast.error(data.error || "Failed to add song");
      }
    } catch (error) {
      toast.error("Failed to add song");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFavorite = async (id: string) => {
    try {
      const res = await fetch(`/api/favorites/${id}/toggle`, {
        method: "PATCH"
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        // Update local state
        setSongs(songs.map(song => 
          song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
        ));
      } else {
        toast.error("Failed to update");
      }
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this song permanently?")) return;

    try {
      const res = await fetch(`/api/favorites/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        toast.success("Song deleted");
        setSongs(songs.filter(s => s.id !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const favoritesCount = songs.filter(s => s.isFavorite).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {session.user?.name || session.user?.email}!
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total Songs */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 ml-3">Total Songs</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{songs.length}</p>
            <p className="text-sm text-gray-600 mt-1">songs in library</p>
          </div>

          {/* Favorites Count */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 ml-3">Favorites</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">{favoritesCount}</p>
            <p className="text-sm text-gray-600 mt-1">songs favorited</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 ml-3">Quick Actions</h3>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium"
              >
                {showAddForm ? "Cancel" : "+ Add Song"}
              </button>
              <Link href="/favorites">
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium">
                  View Favorites
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Add Song Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Song</h2>
            <form onSubmit={handleAddSong} className="space-y-4">
              <div>
                <label htmlFor="songName" className="block text-gray-700 font-medium mb-2">
                  Song Name *
                </label>
                <input
                  type="text"
                  id="songName"
                  value={formData.songName}
                  onChange={(e) => setFormData({ ...formData, songName: e.target.value })}
                  placeholder="Enter song name"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  required
                  disabled={submitting}
                />
              </div>
              <div>
                <label htmlFor="artist" className="block text-gray-700 font-medium mb-2">
                  Artist (Optional)
                </label>
                <input
                  type="text"
                  id="artist"
                  value={formData.artist}
                  onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  placeholder="Enter artist name"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  disabled={submitting}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {submitting ? "Adding..." : "Add Song"}
              </button>
            </form>
          </div>
        )}

        {/* All Songs List */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              All Songs ({songs.length})
            </h2>
          </div>

          {loadingSongs ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : songs.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <p className="text-gray-500 text-lg mb-2">No songs yet</p>
              <p className="text-gray-400">Click <b>Add Song</b> to start your collection!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-full">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{song.songName}</h3>
                      {song.artist && (
                        <p className="text-sm text-gray-500">{song.artist}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        Added {new Date(song.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                 <button
  onClick={() => toggleFavorite(song.id)}
  className={`p-2 rounded-full transition-all duration-200 ${
    song.isFavorite 
      ? "text-red-500 bg-red-50 hover:bg-red-100" 
      : "text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-red-400"
  }`}
  title={song.isFavorite ? "Remove from favorites" : "Add to favorites"}
>
  <svg 
    className="w-6 h-6" 
    fill={song.isFavorite ? "currentColor" : "none"} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
    />
  </svg>
</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}