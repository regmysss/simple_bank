import { decrypt, updateSession } from "@/lib/session";
import { PAGES } from "@/shared/constants/routes";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = [PAGES.MAIN, PAGES.LOGIN, PAGES.REGISTER, PAGES.FORGOT_PASSWORD];
const protectedRoutes = [PAGES.HOME, PAGES.DEPOSIT_MONEY, PAGES.SEND_MONEY, PAGES.HISTORY, PAGES.ACCOUNT];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtected = protectedRoutes.includes(path);
    const isPublic = publicRoutes.includes(path);

    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (isProtected && !session?.userId) {
        return NextResponse.redirect(new URL(PAGES.LOGIN, req.nextUrl))
    }

    if (
        isPublic &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith(PAGES.HOME)
    ) {
        await updateSession();
        return NextResponse.redirect(new URL(PAGES.HOME, req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}