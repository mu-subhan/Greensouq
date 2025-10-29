
// id/route
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const session = await getServerSession(authOptions);

//     if (!session?.user?.id) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const favorite = await prisma.favoriteSong.findUnique({
//       where: { id: params.id }
//     });

//     if (!favorite || favorite.userId !== session.user.id) {
//       return NextResponse.json({ error: "Not found" }, { status: 404 });
//     }

//     await prisma.favoriteSong.delete({
//       where: { id: params.id }
//     });

//     return NextResponse.json({ message: "Deleted" });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const song = await prisma.favoriteSong.findUnique({
      where: { id: params.id }
    });

    if (!song || song.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Toggle isFavorite
    const updated = await prisma.favoriteSong.update({
      where: { id: params.id },
      data: { isFavorite: !song.isFavorite }
    });

    return NextResponse.json({ 
      song: updated,
      message: updated.isFavorite ? "Added to favorites" : "Removed from favorites"
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}