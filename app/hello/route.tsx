import { NextResponse } from "next/server"

export async function GET() {
    // return new Response('testing routes.')
    return NextResponse.json({ message: 'heck yeah', count: 10 })
}