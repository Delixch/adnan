import { NextResponse } from 'next/server';

// Fallback for local development
let localCounter = 0;

const COUNTER_KEY = 'visitor_count';

// Helper function to get KV instance
async function getKV() {
  try {
    const { kv } = await import('@vercel/kv');
    return kv;
  } catch (error) {
    console.log('Vercel KV not available, using local counter');
    return null;
  }
}

// GET handler to retrieve the current count
export async function GET() {
  try {
    const kv = await getKV();
    if (kv) {
      const count = await kv.get(COUNTER_KEY) || 0;
      return NextResponse.json({ count: Number(count) });
    } else {
      // Fallback for local development
      return NextResponse.json({ count: localCounter });
    }
  } catch (error) {
    console.error('Error getting counter:', error);
    return NextResponse.json({ count: localCounter });
  }
}

// POST handler to increment the count
export async function POST() {
  try {
    const kv = await getKV();
    if (kv) {
      const currentCount = await kv.get(COUNTER_KEY) || 0;
      const newCount = Number(currentCount) + 1;
      await kv.set(COUNTER_KEY, newCount);
      return NextResponse.json({ count: newCount });
    } else {
      // Fallback for local development
      localCounter += 1;
      return NextResponse.json({ count: localCounter });
    }
  } catch (error) {
    console.error('Error incrementing counter:', error);
    localCounter += 1;
    return NextResponse.json({ count: localCounter });
  }
} 