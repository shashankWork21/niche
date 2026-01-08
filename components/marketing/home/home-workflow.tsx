"use client";

const steps = [
  {
    number: "01",
    title: "Share your context",
    description:
      "Answer structured questions about your skills, experience, and the problems you care about solving. AI guides you through each framework.",
    highlight: "5 min setup",
    frameworks: ["Niche discovery", "ICP definition"],
  },
  {
    number: "02",
    title: "Get framework analysis",
    description:
      "Receive niche statements, offer positioning, business model classification (B2B/B2C), and validation prompts.",
    highlight: "Free tier",
    frameworks: ["Market sizing", "MVP strategy"],
  },
  {
    number: "03",
    title: "Validate & launch",
    description:
      "Upgrade for market research, competitor analysis, pricing strategies, launch roadmaps, and optional 1:1 strategy calls with the founder.",
    highlight: "Coming Soon",
    frameworks: ["Pricing models", "Launch channels"],
  },
];

export function HomeWorkflow() {
  return (
    <section className="mt-20 px-4 sm:mt-24 sm:px-6 md:mt-32">
      <div className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-linear-to-br from-blue-50/80 via-indigo-50/40 to-white p-8 shadow-2xl shadow-blue-500/10 sm:p-12 md:p-16 lg:p-20">
        {/* Background accents */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-linear-to-br from-blue-300/30 via-indigo-200/20 to-transparent blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-tr from-slate-200/20 via-blue-100/20 to-transparent blur-[120px]" />

        {/* Texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-linear-to-br from-white/80 to-blue-50/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-lg shadow-blue-500/10 backdrop-blur-sm sm:px-5">
              The process
            </div>
            <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-blue-950 sm:mt-8 sm:text-5xl md:text-6xl">
              From vague idea to{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  validated strategy
                </span>
                <svg
                  className="absolute -bottom-1 left-0 h-3 w-full text-blue-300"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6C100 2 200 10 298 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-900/80 sm:mt-6">
              A structured journey through proven frameworks, customized for
              your unique context.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="relative h-full overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* Step number with gradient */}
                  <div className="flex items-start justify-between">
                    <div className="font-sans text-7xl font-black leading-none">
                      <span className="bg-linear-to-br from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                    <div className="rounded-full border-2 border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800">
                      {step.highlight}
                    </div>
                  </div>

                  <h3 className="mt-6 font-sans text-2xl font-bold text-blue-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-blue-900/70">
                    {step.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.frameworks.map((framework, i) => (
                      <div
                        key={i}
                        className="rounded-full bg-linear-to-br from-blue-100 to-indigo-100 px-3 py-1 text-xs font-semibold text-blue-800"
                      >
                        {framework}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
