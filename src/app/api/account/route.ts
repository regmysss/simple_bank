import db from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const session = (await cookies()).get("session")?.value;

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const payload = await decrypt(session) as { userId: string };

    try {
        const account = await db.account.findFirst(
            {
                where: {
                    userId: payload.userId,
                },
                include: {
                    user: true,
                }
            }
        )

        if (!account) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            );
        }

        const response = {
            id: account.id,
            userId: account.userId,
            balance: account.balance,
            avatar: account.avatar || null,
            user: {
                fullname: account.user.fullname,
                createdAt: account.user.createdAt,
            }
        }

        return NextResponse.json(response);
    }
    catch (error) {
        console.error("Error in GET request:", error);
        return NextResponse.json(
            {
                error: "An error occurred while processing your request."
            },
            { status: 500 }
        )
    }
}