"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
}

export default function MobileHeader({ title, showBack = false }: MobileHeaderProps) {
  const router = useRouter();

  return (
    <header
      className="md:hidden flex items-center px-4 py-3 select-none"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderBottom: "1px solid var(--nav-border)",
        paddingTop: "calc(env(safe-area-inset-top) + 0.75rem)",
      }}
    >
      {showBack && (
        <button
          onClick={() => router.back()}
          className="mr-3 p-1 rounded-full hover:bg-[var(--card)] transition-colors select-none"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--foreground)]"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <h1 className="text-lg font-semibold text-[var(--foreground)] flex-1">
        {title}
      </h1>
      <Link
        href="/settings"
        className="p-1 rounded-full hover:bg-[var(--card)] transition-colors select-none"
        aria-label="Settings and Profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[var(--foreground)]"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </header>
  );
}
