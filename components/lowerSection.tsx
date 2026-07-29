import { Fraunces, Lora } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

export default function LowerSection() {
  return (
    <section className="bg-gray-50 flex flex-col justify-center md:mt-20 py-20 md:py-32">
      <h1 className={`${fraunces.className} text-center text-2xl md:text-4xl`}>
        Ready to operationalize your sustainability goals?
      </h1>
      <div className="flex items-center justify-center">
        <button className="mt-8 bg-black text-white px-4 py-3 inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Request a demo
        </button>
      </div>
    </section>
  );
}
