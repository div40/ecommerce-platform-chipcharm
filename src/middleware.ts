import { NextRequest, NextResponse } from "next/server";
import { getLoggedInUser } from "./lib/payload-utils";

export async function middleware(req: NextRequest) {
    const {nextUrl, cookies} = req
    const {user} = await getLoggedInUser(cookies)

    
    // can't access them when loggedin
    if(user && ["/sign-in", "/sign-up"].includes(nextUrl.pathname)) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`)
    }

    return NextResponse.next()
}