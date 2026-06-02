
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections =
      document.querySelectorAll("section");

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              const currentSection =
                entry.target.id
                  .charAt(0)
                  .toUpperCase() +
                entry.target.id.slice(
                  1
                );

              setActive(
                currentSection
              );
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(section)
    );

    return () =>
      observer.disconnect();
  }, []);

  const handleClick = (
    link: string
  ) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to homepage"
          className="text-xl font-bold text-emerald-400"
          onClick={() =>
            handleClick("Home")
          }
        >
          {"<"}Radwa.div /{">"}
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  onClick={() =>
                    handleClick(link)
                  }
                  aria-current={
                    active === link
                      ? "page"
                      : undefined
                  }
                  className={`text-sm font-medium transition duration-300 focus:outline-none ${
                    active === link
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          className="text-white md:hidden"
          aria-expanded={
            menuOpen
          }
          aria-controls="mobile-menu"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-100"
            : "max-h-0"
        }`}
      >
        <nav className="border-t border-white/10 bg-black/80 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  onClick={() =>
                    handleClick(link)
                  }
                  aria-current={
                    active === link
                      ? "page"
                      : undefined
                  }
                  className={`text-base font-medium transition ${
                    active === link
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

