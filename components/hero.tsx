export default function Hero() {
  return (
    <main className="min-h-screen relative bg-linear-to-b from-sky-300  via-sky-50 via-60% to-orange-100 flex items-center justify-center px-6 pb-40">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl leading-[1.05] tracking-tight text-gray-900 md:text-7xl">
          Sustainability insights,
        </h1>
        <h2 className="text-5xl leading-[1.05] tracking-tight text-gray-900 md:text-7xl font-semibold mt-1">
          built for business
        </h2>
        <p className="mt-6  mx-auto text-lg text-gray-900 leading-relaxed">
          Track impact, reduce emissions, and accelerate progress—with clarity
          and confidence.
        </p>
        <div className="mt-6 flex gap-6 justify-center items-center">
          <button className="text-sm font-medium bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 transition-colors rounded-full inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Request a demo
          </button>
          <button className="text-sm font-medium bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 transition-colors rounded-full inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Explore the platform
          </button>
        </div>
      </div>
    </main>
  );
}
