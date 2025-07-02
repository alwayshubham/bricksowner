'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-800">Sangeeta Bricks</Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/bricks">Bricks</Link>
          <Link href="/booking">Book</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}