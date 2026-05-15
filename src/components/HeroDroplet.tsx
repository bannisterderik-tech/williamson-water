"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroDroplet() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(143,193,255,0.55), rgba(47,123,255,0.25) 45%, transparent 70%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric ripples */}
      {!reduce &&
        [0, 1.4, 2.8].map((delay, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
            initial={{ scale: 0.4, opacity: 0.8 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

      {/* Main droplet */}
      <motion.svg
        viewBox="0 0 400 400"
        className="relative size-full drop-shadow-[0_30px_60px_rgba(8,29,77,0.45)]"
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <radialGradient id="drop-body" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#cfe6ff" />
            <stop offset="35%" stopColor="#589fff" />
            <stop offset="75%" stopColor="#154bc0" />
            <stop offset="100%" stopColor="#081d4d" />
          </radialGradient>
          <radialGradient id="drop-shine" cx="35%" cy="25%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="drop-sun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe486" />
            <stop offset="100%" stopColor="#f4ac00" />
          </linearGradient>
        </defs>

        <motion.path
          d="M200 28 C 290 145, 340 198, 340 252 a 140 140 0 1 1 -280 0 C 60 198, 110 145, 200 28 Z"
          fill="url(#drop-body)"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="155"
          cy="195"
          rx="55"
          ry="80"
          fill="url(#drop-shine)"
          animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sun accent */}
        <motion.circle
          cx="290"
          cy="120"
          r="34"
          fill="url(#drop-sun)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {!reduce && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "290px 120px" }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <line
                key={a}
                x1="290"
                y1="68"
                x2="290"
                y2="80"
                stroke="#ffd24a"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${a} 290 120)`}
              />
            ))}
          </motion.g>
        )}
      </motion.svg>

      {/* Floating bubbles */}
      {!reduce &&
        [
          { x: "8%", y: "20%", size: 14, delay: 0 },
          { x: "85%", y: "60%", size: 22, delay: 1.2 },
          { x: "15%", y: "78%", size: 10, delay: 0.4 },
          { x: "75%", y: "12%", size: 8, delay: 2 },
        ].map((b, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full bg-white/70 ring-1 ring-white"
            style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
            animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + i, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
    </div>
  );
}
