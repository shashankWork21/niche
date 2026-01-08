"use client";

export function HomeProofPoints() {
  return (
    <section className="mt-16 border-y-2 border-blue-200 bg-linear-to-r from-blue-50/50 via-indigo-50/30 to-blue-50/50 px-4 py-12 sm:mt-20 sm:px-6 sm:py-16 md:mt-24 md:py-20">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-10 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-200/0 blur-3xl transition-all duration-500 group-hover:bg-blue-300/40" />
          <div className="relative">
            <div className="font-sans text-6xl font-black">
              <span className="bg-linear-to-br from-blue-700 to-blue-900 bg-clip-text text-transparent">
                7
              </span>
            </div>
            <div className="mt-4 font-sans text-base font-bold uppercase tracking-widest text-blue-950">
              Frameworks
            </div>
            <div className="mt-2 text-sm leading-relaxed text-blue-900/70">
              Proven startup validation methodologies
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-10 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-200/0 blur-3xl transition-all duration-500 group-hover:bg-blue-300/40" />
          <div className="relative">
            <div className="font-sans text-6xl font-black">
              <span className="bg-linear-to-br from-blue-700 to-blue-900 bg-clip-text text-transparent">
                30+
              </span>
            </div>
            <div className="mt-4 font-sans text-base font-bold uppercase tracking-widest text-blue-950">
              Validated Ideas
            </div>
            <div className="mt-2 text-sm leading-relaxed text-blue-900/70">
              Ideas validated via custom GPT prototype
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-10 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-200/0 blur-3xl transition-all duration-500 group-hover:bg-blue-300/40" />
          <div className="relative">
            <div className="font-sans text-6xl font-black">
              <span className="bg-linear-to-br from-blue-700 to-blue-900 bg-clip-text text-transparent">
                ₹0
              </span>
            </div>
            <div className="mt-4 font-sans text-base font-bold uppercase tracking-widest text-blue-950">
              To Start
            </div>
            <div className="mt-2 text-sm leading-relaxed text-blue-900/70">
              Free tier generates your first validated idea
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
