import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    // Simulate database/email operation
    console.log("Processing contact form:", body);

    // Return successful response
    return NextResponse.json({ success: true, message: "Email sent" });
}
