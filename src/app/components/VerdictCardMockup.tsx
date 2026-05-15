import { Badge } from "./ui/badge";

export function VerdictCardMockup() {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-8 max-w-lg mx-auto shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Badge className="bg-[#E0A800] text-black px-6 py-3 text-xl font-semibold uppercase tracking-wide">
          Yellow
        </Badge>
        <div className="text-white/60 font-mono">62 / 100</div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex gap-3">
          <div className="text-[#D64545] mt-1">×</div>
          <div className="text-white/90">Comp band 18% below market</div>
        </div>
        <div className="flex gap-3">
          <div className="text-[#E0A800] mt-1">△</div>
          <div className="text-white/90">Only 47 full matches in SF metro</div>
        </div>
        <div className="flex gap-3">
          <div className="text-[#E0A800] mt-1">△</div>
          <div className="text-white/90">Stack combo is rare: React + Rust</div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="text-sm text-white/50 font-mono">
          Confidence: Medium (n=312 profiles)
        </div>
      </div>
    </div>
  );
}
