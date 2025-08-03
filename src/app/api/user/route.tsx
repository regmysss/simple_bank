import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser)
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({ message: 'User registered successfully', user: userWithoutPassword }, { status: 201 });
}