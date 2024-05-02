import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const BASE_URL = process.env.BASE_URL;

  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const reportId= searchParams.get('reportId');
  const message = searchParams.get('message');
  
  const res = await fetch(`${BASE_URL}/${reportId}?q=${message}`)
  const data = await res.json()
 
  return NextResponse.json({ data })
}
