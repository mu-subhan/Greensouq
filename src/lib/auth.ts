// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { prisma } from "./prisma";
// import bcrypt from "bcryptjs";

// // Extend the built-in session types
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//       name?: string | null;
//     };
//   }

//   interface User {
//     id: string;
//     email: string;
//     name?: string | null;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   // REMOVE PrismaAdapter - We're using JWT strategy only
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         try {
//           if (!credentials?.email || !credentials?.password) {
//             console.log("❌ Missing credentials");
//             return null;
//           }

//           console.log("🔐 Looking for user:", credentials.email);
          
//           const user = await prisma.user.findUnique({
//             where: { 
//               email: credentials.email.toLowerCase() 
//             }
//           });

//           if (!user) {
//             console.log("❌ User not found");
//             return null;
//           }

//           console.log("✅ User found, verifying password...");
//           const isValid = await bcrypt.compare(credentials.password, user.password);
          
//           if (!isValid) {
//             console.log("❌ Invalid password");
//             return null;
//           }

//           console.log("🎉 Authentication successful!");
//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name,
//           };
//         } catch (error) {
//           console.error("💥 Auth error:", error);
//           return null;
//         }
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login", // Changed to redirect to login on error
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email as string;
//         session.user.name = token.name as string | null;
//       }
//       return session;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: process.env.NODE_ENV === "development",
// };




import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() }
        });

        if (!user || !user.password) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};