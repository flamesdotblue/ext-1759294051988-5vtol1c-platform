import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardsData = [
  {
    id: 'intro-design',
    title: 'Design Systems',
    subtitle: 'Consistency at scale',
    body:
      'Design tokens, components, and patterns unify product experiences. Flip through to see more topics.',
    accentFrom: 'from-teal-500/20',
    accentTo: 'to-cyan-500/20',
  },
  {
    id: 'ai-ux',
    title: 'AI + UX',
    subtitle: 'Interfaces that adapt',
    body:
      'Leverage machine learning to personalize flows and reduce friction. Responsiveness with intent.',
    accentFrom: 'from-fuchsia-500/20',
    accentTo: 'to-indigo-500/20',
  },
  {
    id: 'perf',
    title: 'Performance',
    subtitle: 'Speed as a feature',
    body:
      'Delight users with instant feedback and seamless transitions. Perceived performance matters.',
    accentFrom: 'from-amber-400/20',
    accentTo: 'to-orange-500/20',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    subtitle: 'Inclusive by default',
    body:
      'Build for everyone. Color contrast, keyboard support, and semantics create equitable experiences.',
    accentFrom: 'from-emerald-400/20',
    accentTo: 'to-lime-400/20',
  },
];

const springyEase = [0.22, 1, 0.36, 1];

export default function CardDeck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const total = cardsData.length;
  const currentCard = useMemo(() => cardsData[index], [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <div className="grid gap-6">
      <div className="relative mx-auto w-full max-w-2xl" aria-live="polite" aria-atomic="true">
        <div className="[perspective:1200px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentCard.id}
              custom={direction}
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: springyEase }}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${currentCard.accentFrom} ${currentCard.accentTo} p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden`}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              <CardContent card={currentCard} />
              <AccentGlow />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 active:scale-[0.98] transition"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <div className="text-xs text-neutral-400 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <button
          onClick={next}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 active:scale-[0.98] transition"
          aria-label="Next card"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const flipVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    transformPerspective: 1200,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    transformPerspective: 1200,
    transformOrigin: 'center',
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    transformPerspective: 1200,
    transformOrigin: direction > 0 ? 'right center' : 'left center',
  }),
};

function CardContent({ card }) {
  return (
    <div className="relative z-10">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
        <span className="h-2 w-2 rounded-full bg-white/60" />
        Featured
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">{card.title}</h3>
      <p className="mt-1 text-neutral-300">{card.subtitle}</p>
      <p className="mt-4 text-neutral-200/90 leading-relaxed">{card.body}</p>
      <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-300">
        <span className="rounded-full bg-white/5 px-2 py-1 border border-white/10">Motion</span>
        <span className="rounded-full bg-white/5 px-2 py-1 border border-white/10">Accessibility</span>
        <span className="rounded-full bg-white/5 px-2 py-1 border border-white/10">Tailwind</span>
      </div>
    </div>
  );
}

function AccentGlow() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
    </>
  );
}
