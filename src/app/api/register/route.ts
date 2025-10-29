
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();

    console.log("📝 Registration attempt for:", email);

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingUser) {
      console.log("❌ User already exists:", email);
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("🔐 Password hashed successfully");

    // Create user
    const user = await prisma.user.create({
      data: {
        name: fullName,
        email: email.toLowerCase(),
        password: hashedPassword,
      }
    });

    console.log("✅ User created successfully:", user.id);

    return NextResponse.json(
      { 
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("💥 Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}