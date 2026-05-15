import { Badge } from "./ui/badge";

export function HeroProductMockup() {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <div className="p-6 space-y-4">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-3">
          <div className="text-white font-mono text-sm space-y-2">
            <div className="text-white/60 text-xs uppercase">Job Title</div>
            <div className="text-lg">Senior Software Engineer</div>
          </div>
          <div className="text-white/80 text-sm space-y-1">
            <div>• 5+ years React experience</div>
            <div>• Rust or systems programming background</div>
            <div>• Experience with distributed systems</div>
            <div>• Strong CS fundamentals</div>
            <div>• SF Bay Area, on-site 3 days/week</div>
          </div>
          <div className="flex gap-6 text-sm pt-2">
            <div>
              <span className="text-white/60">Location: </span>
              <span className="text-white">San Francisco, CA</span>
            </div>
            <div>
              <span className="text-white/60">Comp: </span>
              <span className="text-white">$160–180K base</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2E2A5C]/20 to-transparent border border-[#E0A800]/30 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-[#E0A800] text-black px-5 py-2 text-lg font-semibold uppercase">
              Yellow
            </Badge>
            <div className="text-white/60 font-mono text-lg">62 / 100</div>
          </div>

          <div className="space-y-3 mb-4 text-sm">
            <div className="flex gap-3">
              <div className="text-[#D64545]">×</div>
              <div className="text-white/90">Comp band 18% below market</div>
            </div>
            <div className="flex gap-3">
              <div className="text-[#E0A800]">△</div>
              <div className="text-white/90">Only 47 full matches in SF metro</div>
            </div>
            <div className="flex gap-3">
              <div className="text-[#E0A800]">△</div>
              <div className="text-white/90">Stack combo is rare: React + Rust</div>
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm rounded transition-colors">
            Generate client report →
          </button>
        </div>
      </div>
    </div>
  );
}
