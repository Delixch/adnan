import { NextResponse } from 'next/server';

// In-memory counter for Vercel compatibility
let counter = { count: 15 }; // Starting with current value

// GET handler to retrieve the current count
export async function GET() {
  return NextResponse.json(counter);
}

// POST handler to increment the count
export async function POST() {
  counter.count += 1;
  return NextResponse.json(counter);
} 