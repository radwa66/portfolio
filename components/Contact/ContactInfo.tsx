import { ReactNode } from "react";

type ContactInfoProps = {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
};

export default function ContactInfo({
  icon,
  children,
  href,
  ariaLabel,
}: ContactInfoProps) {
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className="mb-4 flex items-center gap-3 text-gray-400 transition hover:text-white"
      >
        {content}
      </a>
    );
  }

  return (
    <address className="mb-8 flex items-center gap-3 text-gray-400 not-italic">
      {content}
    </address>
  );
}