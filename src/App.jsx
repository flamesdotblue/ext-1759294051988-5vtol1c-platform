import React from 'react';
import Header from './components/Header';
import HeroCover from './components/HeroCover';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <HeroCover />
        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Cards</h2>
            <p className="mt-3 text-neutral-300">Flip through to reveal new content with a smooth Y-axis rotation.</p>
          </div>
          <CardDeck />
        </section>
      </main>
      <Footer />
    </div>
  );
}
