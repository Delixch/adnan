import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'counter.json');

// Helper function to read the counter file
async function getCounter() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file does not exist, create it with an initial count of 0.
    // This makes the function resilient.
    await fs.writeFile(dataFilePath, JSON.stringify({ count: 0 }), 'utf-8');
    return { count: 0 };
  }
}

// GET handler to retrieve the current count
export async function GET() {
  const counter = await getCounter();
  return NextResponse.json(counter);
}

// POST handler to increment the count
export async function POST() {
  let counter = await getCounter();
  counter.count += 1;
  await fs.writeFile(dataFilePath, JSON.stringify(counter), 'utf-8');
  return NextResponse.json(counter);
} 