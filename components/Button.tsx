import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  className?: string;
  target?: string;
  download?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  ariaLabel,
  target,
  download ,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold transition duration-300 w-full sm:w-auto";

  const variants = {
    primary: "bg-emerald-400 text-black hover:bg-emerald-300",

    secondary:
      "border border-gray-700 bg-transparent text-white hover:border-white",
  };

  return (
    <Link
      href={href}
      target={target}
      download={download}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
