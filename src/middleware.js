export const runtime="nodejs" 

import { NextResponse } from "next/server";
import { auth } from "@/auth";



const protectRoutes = ["/dashboard","/manage-game","/manage-game/diamond"]

export async function middleware(request){
    const session = await auth();
    const isloggin = !!session?.user
    const role = session?.user?.role
    const {pathname} = request.nextUrl
    

    const isprotect = protectRoutes.includes(pathname)

    if(isprotect && !isloggin) return NextResponse.redirect(new URL("/signin",request.url))

     if(pathname === "/dashboard" && role !== "admin") return NextResponse.redirect(new URL("/",request.url))
     if(pathname === "/manage-game"&& role !== "admin") return NextResponse.redirect(new URL("/",request.url))
     if(pathname === "/manage-game/diamond"&& role !== "admin") return NextResponse.redirect(new URL("/",request.url))
     

    if(isloggin && pathname === "/signin") return NextResponse.redirect(new URL("/",request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}