'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, Images, Users, Leaf } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function useCountUp(end: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
}

function CountUpStat({ end, duration = 2000, suffix = '' }: CountUpProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useCountUp(end, duration, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Images, value: 50673, label: 'Total Images', suffix: '' },
  { icon: Users, value: 12, label: 'Teams', suffix: '' },
  { icon: Leaf, value: 6, label: 'Tree Species', suffix: '' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #10243D 0%, #1a3a52 60%, #94CCC6 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Subtle dot-grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148,204,198,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Gradient fade overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(16,36,61,0.4))' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 flex flex-col items-center text-center">

        {/* Logo icon */}
        <div className="mb-8 relative w-20 h-20 drop-shadow-2xl animate-[fadeIn_0.6s_ease-out_forwards]">
          <Image
            src="/logo/agriChallenge-logo.svg"
            alt="AgrI Challenge logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#94CCC6]/40 bg-[#94CCC6]/10 text-[#94CCC6] text-xs font-semibold tracking-wide uppercase"
          style={{ animationDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1CC9A9] inline-block animate-pulse" />
          Data-Centric AI Competition
        </div>

        {/* Headline */}
        <h1 className="heading-display text-white mb-4 max-w-3xl">
          AgrI Challenge
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl font-medium text-white/80 mb-6 max-w-2xl leading-relaxed tracking-tight">
          A Data-Centric Competition Framework for Agricultural Machine Learning
        </p>

        {/* Description */}
        <p className="text-base text-white/65 mb-10 max-w-xl leading-relaxed">
          Twelve interdisciplinary teams independently collected{' '}
          <span className="text-[#1CC9A9] font-semibold">50,673 field images</span>{' '}
          of{' '}
          <span className="text-[#1CC9A9] font-semibold">6 tree species</span>{' '}
          over a 2-day campaign. We introduce the{' '}
          <span className="text-white/90 font-medium">Cross-Team Validation (CTV)</span>{' '}
          framework, a new paradigm for evaluating real-world model generalization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#request-access"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1CC9A9] text-white text-sm font-bold rounded-lg hover:bg-[#17b396] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#1CC9A9]/25"
          >
            Request Dataset Access
            <ArrowRight size={16} />
          </a>
          <a
            href="#arxiv"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/40 text-white text-sm font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <BookOpen size={16} />
            Read the Paper
          </a>
        </div>

        {/* Stats row */}
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-left border-2 border-[#1CC9A9]/60 hover:border-[#1CC9A9] hover:bg-white/10 transition-all duration-200"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon size={18} className="text-[#94CCC6] mb-3" strokeWidth={1.5} />
                  <div className="text-xl sm:text-2xl font-extrabold text-[#1CC9A9] font-mono leading-none mb-1 break-all">
                    <CountUpStat end={stat.value} duration={1800 + i * 200} />
                  </div>
                  <div className="text-xs text-white/55 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
