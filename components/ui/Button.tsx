import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full
        px-7 py-4
        font-semibold
        transition-all duration-300
        hover:-translate-y-1
        active:scale-95
        ${
          variant === "primary"
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
            : "glass border border-white/10 text-white hover:bg-white/10"
        }
        ${className}
      `}
    >
      <span>{children}</span>

      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
    </Link>
  );
}