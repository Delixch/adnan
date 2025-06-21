"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black mb-4">Test Page</h1>
      <p className="text-black text-lg">If you can see this, the basic setup is working.</p>
      <div className="mt-8 p-4 bg-blue-500 text-white rounded">
        <p>This is a test component to verify rendering.</p>
      </div>
    </div>
  );
} 