export default function Footer() {
  return (
    <footer className="relative bg-yellow-300 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-8 px-6 md:px-10 py-8 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 text-sm font-medium text-[#5c5a0c]">
          <a href="#product" className="hover:opacity-60 transition-opacity">
            Product
          </a>
          <a href="#journal" className="hover:opacity-60 transition-opacity">
            Journal
          </a>
          <a href="#about" className="hover:opacity-60 transition-opacity">
            About
          </a>
          <a href="#careers" className="hover:opacity-60 transition-opacity">
            Careers
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Get started
          </a>
        </div>
        <p className="font-serif italic text-sm text-[#5c5a0c]">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>

      <div className="relative h-40 sm:h-56 md:h-72 mx-6 md:mx-10 rounded-sm overflow-hidden footer-weave" />

      <div className="px-6 md:px-10 -mt-4 w-full overflow-hidden">
        <h2 className="text-center mt-4 font-sans font-extrabold tracking-wider leading-tighter text-[#5c5a0c] leading-[0.8] text-[12vw] whitespace-nowrap select-none">
          Aetherfield
        </h2>
      </div>
    </footer>
  );
}
