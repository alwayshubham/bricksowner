"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-3xl font-bold">Counter Page</h1>

      <div className="flex items-center space-x-4">
        <Button onClick={() => setCount(count - 1)}>-</Button>

        <Input
          type="text"
          value={count}
          readOnly
          className="w-20 text-center"
        />

        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>

      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Back to Home
      </a>
    </div>
  );
}
