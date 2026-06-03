import Link from "next/link";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function SalahsLab() {
  return (
    <section
      id="salahslab"
      aria-labelledby="salahslab-heading"
      className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 lg:py-28 border-t  border-white/10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-2xl">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.25em] text-emerald-400 sm:text-base">
            -- Family Business
          </span>

          <h2
            id="salahslab-heading"
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Salah&apos;s Lab
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            Salah&apos;s Lab is a software-focused family business building
            modern digital products, AI-powered solutions, and web experiences.
            I contribute through frontend development, creating responsive,
            accessible, and user-focused interfaces.
          </p>

          <Link
            href="https://salahslab.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Salah's Lab website"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300 sm:text-base"
          >
            Visit Salah&apos;s Lab
            <SquareArrowOutUpRight size={18} />
          </Link>
        </div>

        {/* Right Card */}
        <article
          aria-label="Masari Project"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-emerald-400/30 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Icon */}
            <Image
              src="/images/masari-logo.svg"
              alt="Masari logo"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-2"
            />
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Masari</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                An AI-powered expense tracking application designed to simplify
                financial management through smart automation, intuitive
                experiences, and intelligent insights.
              </p>

              <div className="mt-6">
                <Button
                  href="https://masari.salahslab.com"
                  variant="primary"
                  target="_blank"
                  ariaLabel="Try Masari application"
                  className="gap-2"
                >
                  Try Masari
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
