import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-teal-300" />
          <span className="font-semibold tracking-tight">Flip Cards</span>
        </div>
        <nav className="text-sm text-neutral-300 hidden sm:block">
          <ul className="flex items-center gap-6">
            <li className="hover:text-white transition-colors">Home</li>
            <li className="hover:text-white transition-colors">Showcase</li>
            <li className="hover:text-white transition-colors">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
