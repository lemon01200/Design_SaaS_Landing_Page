export function SourcingPlaybookMockup() {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden max-w-2xl mx-auto shadow-2xl">
      <div className="flex border-b border-white/10">
        <button className="px-6 py-3 text-sm text-white bg-white/5 border-b-2 border-[#2E2A5C]">
          Wide Net
        </button>
        <button className="px-6 py-3 text-sm text-white/50">
          Precise
        </button>
        <button className="px-6 py-3 text-sm text-white/50">
          Adjacent Skills
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-black/40 rounded p-4 font-mono text-sm text-white/90 leading-relaxed">
          <span className="text-[#E0A800]">(</span>
          <span className="text-white">senior OR staff OR lead</span>
          <span className="text-[#E0A800]">)</span>{" "}
          <span className="text-[#2F9E5A]">AND</span>{" "}
          <span className="text-[#E0A800]">(</span>
          <span className="text-white">react OR reactjs OR "react.js"</span>
          <span className="text-[#E0A800]">)</span>{" "}
          <span className="text-[#2F9E5A]">AND</span>{" "}
          <span className="text-[#E0A800]">(</span>
          <span className="text-white">rust OR "systems programming"</span>
          <span className="text-[#E0A800]">)</span>
        </div>

        <button className="px-4 py-2 bg-[#2E2A5C] text-white text-sm rounded hover:bg-[#2E2A5C]/80 transition-colors">
          Copy to clipboard
        </button>

        <div className="pt-4 border-t border-white/10">
          <div className="text-sm text-white/60 mb-3">Top target companies:</div>
          <div className="flex flex-wrap gap-2">
            {['Stripe', 'Figma', 'Notion', 'Linear', 'Vercel', 'Anthropic', 'OpenAI', 'Scale'].map((company) => (
              <span
                key={company}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
