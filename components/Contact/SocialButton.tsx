import { ReactNode } from "react";

type SocialButtonProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

export default function SocialButton({
  href,
  icon,
  label,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Radwa Mohamed ${label} profile`}
      className="flex items-center justify-center gap-2 rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-emerald-400 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}