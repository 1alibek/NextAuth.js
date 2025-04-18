import { authOptions } from "@/config";
import NextAuth from "next-auth";

const nextauth=NextAuth(authOptions)
export {nextauth as GET,nextauth as POST}