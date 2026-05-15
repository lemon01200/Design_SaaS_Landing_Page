export function PDFReportMockup() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute -inset-2 bg-gradient-to-r from-[#2E2A5C]/20 to-transparent blur-xl" />
      <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200 transform rotate-[2deg]">
        <div className="p-12 space-y-8">
          <div className="text-xs text-gray-500 uppercase tracking-wide">YOUR LOGO</div>

          <div className="space-y-3">
            <h3 className="text-3xl font-serif text-gray-900">
              Market Feasibility Analysis
            </h3>
            <div className="text-xl text-gray-600">
              Senior Software Engineer — San Francisco Bay Area
            </div>
          </div>

          <div className="py-8 my-8 border-y border-gray-200">
            <div className="text-center space-y-2">
              <div className="text-5xl font-light text-gray-900">47</div>
              <div className="text-gray-600">full matches</div>
              <div className="text-sm text-gray-500">1,240 with one condition relaxed</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Prepared by Sarah Kim · Kim Talent Partners · May 2026
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 bg-white/80 shadow-lg rounded-lg border border-gray-200 w-64 h-48 transform rotate-[-3deg] overflow-hidden">
        <div className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-700">Partial-Match Waterfall</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-6 bg-[#2E2A5C]" style={{ width: '30%' }} />
              <span className="text-xs text-gray-600">47</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 bg-[#2E2A5C]/70" style={{ width: '50%' }} />
              <span className="text-xs text-gray-600">189</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 bg-[#2E2A5C]/50" style={{ width: '80%' }} />
              <span className="text-xs text-gray-600">612</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 bg-[#2E2A5C]/30" style={{ width: '100%' }} />
              <span className="text-xs text-gray-600">1,240</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
