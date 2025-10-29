



// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import {prisma} from "@/lib/prisma";

// export async function PATCH(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   try {
//     const { params } = context;
//     const session = await getServerSession(authOptions);

//     if (!session?.user?.id) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const song = await prisma.favoriteSong.findUnique({
//       where: { id: params.id },
//     });

//     if (!song || song.userId !== session.user.id) {
//       return NextResponse.json({ error: "Not found" }, { status: 404 });
//     }

//     const updated = await prisma.favoriteSong.update({
//       where: { id: params.id },
//       data: { isFavorite: !song.isFavorite },
//     });

//     return NextResponse.json({
//       song: updated,
//       message: updated.isFavorite
//         ? "Added to favorites"
//         : "Removed from favorites",
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }


import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Resolve the params Promise
  const { id } = await context.params;

  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const song = await prisma.favoriteSong.findUnique({
      where: { id },
    });

    if (!song || song.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const updated = await prisma.favoriteSong.update({
      where: { id },
      data: { isFavorite: !song.isFavorite },
    });

    return NextResponse.json({
      song: updated,
      message: updated.isFavorite
        ? "Added to favorites"
        : "Removed from favorites",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

