
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions);

//     console.log("📍 Session check:", {
//       hasSession: !!session,
//       userId: session?.user?.id,
//       email: session?.user?.email
//     });

//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { error: "Please login first" },
//         { status: 401 }
//       );
//     }

//     const favorites = await prisma.favoriteSong.findMany({
//       where: { userId: session.user.id },
//       orderBy: { createdAt: "desc" }
//     });

//     return NextResponse.json({ favorites });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const session = await getServerSession(authOptions);

//     console.log("📍 Session check:", {
//       hasSession: !!session,
//       userId: session?.user?.id,
//       email: session?.user?.email
//     });

//     if (!session?.user?.id) {
//       return NextResponse.json(
//         { error: "Please login first" },
//         { status: 401 }
//       );
//     }

//     const { songName, artist } = await request.json();

//     if (!songName?.trim()) {
//       return NextResponse.json(
//         { error: "Song name required" },
//         { status: 400 }
//       );
//     }

//     const favorite = await prisma.favoriteSong.create({
//       data: {
//         songName: songName.trim(),
//         artist: artist?.trim() || null,
//         userId: session.user.id
//       }
//     });

//     return NextResponse.json({ favorite }, { status: 201 });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Get ALL songs (for dashboard)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const url = new URL(request.url);
    const onlyFavorites = url.searchParams.get("onlyFavorites") === "true";

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Please login first" }, { status: 401 });
    }

    const songs = await prisma.favoriteSong.findMany({
      where: { 
        userId: session.user.id,
        ...(onlyFavorites ? { isFavorite: true } : {})
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ songs });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Add song (unchanged - isFavorite defaults to false)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Please login first" }, { status: 401 });
    }

    const { songName, artist } = await request.json();

    if (!songName?.trim()) {
      return NextResponse.json({ error: "Song name required" }, { status: 400 });
    }

    const song = await prisma.favoriteSong.create({
      data: {
        songName: songName.trim(),
        artist: artist?.trim() || null,
        userId: session.user.id,
        isFavorite: false  // Default to not favorited
      }
    });

    return NextResponse.json({ song }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
