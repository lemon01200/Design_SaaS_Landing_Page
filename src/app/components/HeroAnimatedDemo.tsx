import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "./ui/badge";

const JD_TEXT = `Senior Software Engineer

Requirements:
• 5+ years React experience
• Rust or systems programming background
• Experience with distributed systems
• Strong CS fundamentals
• SF Bay Area, on-site 3 days/week

Location: San Francisco, CA
Compensation: $160–180K base`;

export function HeroAnimatedDemo() {
  const [phase, setPhase] = useState<'empty' | 'typing' | 'analyzing' | 'verdict' | 'hold'>('empty');
  const [typedText, setTypedText] = useState('');
  const [loopCount, setLoopCount] = useState(0);

  // Main animation timeline
  useEffect(() => {
    console.log('Animation cycle starting, loop:', loopCount);
    const timeline = [
      { delay: 0, action: () => { console.log('Phase: empty'); setPhase('empty'); setTypedText(''); } },
      { delay: 1000, action: () => { console.log('Phase: typing'); setPhase('typing'); } },
      { delay: 2500, action: () => { console.log('Phase: analyzing'); setPhase('analyzing'); } },
      { delay: 3500, action: () => { console.log('Phase: verdict'); setPhase('verdict'); } },
      { delay: 6000, action: () => { console.log('Phase: hold'); setPhase('hold'); } },
      { delay: 8000, action: () => { console.log('Loop reset'); setLoopCount(prev => prev + 1); } },
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [loopCount]);

  // Typing effect
  useEffect(() => {
    if (phase === 'typing') {
      let index = 0;
      const typingSpeed = 8; // milliseconds per character
      const typingInterval = setInterval(() => {
        if (index <= JD_TEXT.length) {
          setTypedText(JD_TEXT.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  // Cursor blink (only in empty phase)
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (phase === 'empty') {
      const blinkInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 530);

      return () => clearInterval(blinkInterval);
    }
  }, [phase]);

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <div className="p-6 relative" style={{ minHeight: '450px' }}>
        {/* Input Area */}
        <AnimatePresence mode="wait">
          {(phase === 'empty' || phase === 'typing') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-6"
            >
              <div className="bg-black/40 border border-white/10 rounded-lg p-6 h-full relative">
                {phase === 'empty' && (
                  <div className="text-white/40 font-mono text-sm">
                    Paste your JD here
                    <span
                      className="inline-block w-0.5 h-5 bg-white/60 ml-1 align-middle"
                      style={{ opacity: cursorVisible ? 1 : 0 }}
                    />
                  </div>
                )}
                {phase === 'typing' && (
                  <div className="text-white/90 font-mono text-sm whitespace-pre-wrap">
                    {typedText}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analyzing State */}
        <AnimatePresence>
          {phase === 'analyzing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-6 flex items-center justify-center"
            >
              <div className="text-center space-y-4">
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.98, 1, 0.98]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl font-semibold text-white"
                >
                  Analyzing
                </motion.div>
                <div className="flex gap-1 justify-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-[#2E2A5C] rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Verdict Card */}
        <AnimatePresence>
          {(phase === 'verdict' || phase === 'hold') && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: phase === 'hold' ? [1, 1.02, 1] : 1
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                scale: {
                  duration: 2,
                  repeat: phase === 'hold' ? Infinity : 0,
                  ease: "easeInOut"
                }
              }}
              className="absolute inset-6"
            >
              <div className="bg-gradient-to-br from-[#2E2A5C]/20 to-transparent border border-[#E0A800]/30 rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-[#E0A800] text-black px-6 py-3 text-xl font-semibold uppercase tracking-wide">
                      Yellow
                    </Badge>
                    <div className="text-white/60 font-mono text-xl">62 / 100</div>
                  </div>

                  <motion.div
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    {[
                      { icon: "×", color: "text-[#D64545]", text: "Comp band 18% below market" },
                      { icon: "△", color: "text-[#E0A800]", text: "Only 47 full matches in SF metro" },
                      { icon: "△", color: "text-[#E0A800]", text: "Stack combo is rare: React + Rust" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className={`${item.color} text-lg`}>{item.icon}</div>
                        <div className="text-white/90">{item.text}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pt-4 border-t border-white/10 mb-4"
                  >
                    <div className="text-sm text-white/50 font-mono">
                      Talent pool: 47 full match · 1,240 partial match
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="w-full px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm rounded transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Generate client report →
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
