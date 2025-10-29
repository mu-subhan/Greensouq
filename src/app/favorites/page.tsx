


"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

interface Song {
  id: string;
  songName: string;
  artist: string | null;
  isFavorite: boolean;
  createdAt: string;
}

export default function FavoritesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [favorites, setFavorites] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchFavorites();
    }
  }, [status]);

  const fetchFavorites = async () => {
    try {
      // Fetch only favorited songs
      const res = await fetch("/api/favorites?onlyFavorites=true");
      const data = await res.json();

      if (res.ok) {
        setFavorites(data.songs || []);
      } else {
        toast.error("Failed to load favorites");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to load favorites");
    } finally {
      setLoading(false);
    }
  };

  // const handleDelete = async (id: string) => {
  //   if (!confirm("Delete this song permanently? This cannot be undone.")) return;

  //   try {
  //     const res = await fetch(`/api/favorites/${id}`, {
  //       method: "DELETE"
  //     });

  //     if (res.ok) {
  //       toast.success("Song deleted permanently");
  //       setFavorites(favorites.filter(f => f.id !== id));
  //     } else {
  //       toast.error("Failed to delete song");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to delete song");
  //   }
  // };

  const toggleFavorite = async (id: string) => {
    try {
      const res = await fetch(`/api/favorites/${id}/toggle`, {
        method: "PATCH"
      });

      if (res.ok) {
        toast.success("Removed from favorites");
        // Remove from list
        setFavorites(favorites.filter(f => f.id !== id));
      } else {
        toast.error("Failed to update");
      }
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Favorite Songs</h1>
              <p className="text-gray-600 mt-2">
                {session?.user?.name || session?.user?.email}
              </p>
            </div>
            <Link href="/dashboard">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg">
                ← Back to Dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* Favorites List */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Your Favorites ({favorites.length} {favorites.length === 1 ? "song" : "songs"})
          </h2>

          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <p className="text-gray-500 text-lg">No favorite songs yet</p>
              <p className="text-gray-400 mt-2">Go to dashboard and click the heart icon to add favorites!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-pink-100 to-red-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

                  <div className="flex items-center space-x-2">
                    {/* Heart Icon Button */}
                    <button
                      onClick={() => toggleFavorite(song.id)}
                      className="hover:bg-pink-50 p-2 rounded-lg transition-colors"
                      title={song.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      {song.isFavorite ? (
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      )}
                    </button>

                   
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}