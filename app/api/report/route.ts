import { NextResponse } from 'next/server'

export async function GET() {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}/reports`)
  const data = await res.json()
 
  return NextResponse.json({ data })
}
