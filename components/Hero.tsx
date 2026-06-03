import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6  bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <div className="max-w-4xl text-left">
          <span className="mb-5 block text-sm font-medium uppercase tracking-[0.25em] text-emerald-400 sm:text-base">
            -- Frontend Developer
          </span>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            I build things
            <br />
            <span className="text-emerald-400">for the web.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base md:mt-8 md:text-lg">
            {" "}
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-white">Radwa Mohamed</strong>.
            A passionate frontend developer crafting performant, accessible, and
            beautifully designed web experiences. Currently open to new
            opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-semibold text-black transition duration-300 hover:bg-emerald-300"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-center font-semibold text-white transition duration-300 hover:border-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
