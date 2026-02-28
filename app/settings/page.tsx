"use client";

import MobileHeader from "@/components/MobileHeader";
import { useTheme } from "@/components/ThemeProvider";

type ThemeOption = "system" | "light" | "dark";

function formatThemeName(option: ThemeOption): string {
  if (option === "system") return "System Default";
  return option.charAt(0).toUpperCase() + option.slice(1) + " Mode";
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <MobileHeader title="Settings" showBack />
      <div className="max-w-lg mx-auto px-4 py-6">
        <h2
          className="hidden md:block text-2xl font-bold mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Settings &amp; Profile
        </h2>

        {/* Profile Section */}
        <div
          className="rounded-2xl p-5 mb-6 border"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold select-none"
              style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
              U
            </div>
            <div>
              <p
                className="font-semibold text-base"
                style={{ color: "var(--foreground)" }}
              >
                Guest User
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Sign in to sync your preferences
              </p>
            </div>
          </div>
          <button
            className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors select-none"
            style={{ backgroundColor: "var(--primary)", color: "#fff" }}
          >
            Sign In
          </button>
        </div>

        {/* Theme Section */}
        <div
          className="rounded-2xl border overflow-hidden mb-6"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div
            className="px-5 py-3"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: "var(--muted)" }}
            >
              Appearance
            </p>
          </div>
          {(["system", "light", "dark"] as const).map((option) => (
            <button
              key={option}
              onClick={() => setTheme(option)}
              className="w-full flex items-center justify-between px-5 py-4 transition-colors hover:bg-[var(--card-border)] select-none"
              style={{ borderBottom: "1px solid var(--card-border)" }}
            >
              <span
                className="text-sm font-medium capitalize"
                style={{ color: "var(--foreground)" }}
              >
                {formatThemeName(option)}
              </span>
              {theme === option && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 select-none"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* About Section */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div
            className="px-5 py-3"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: "var(--muted)" }}
            >
              About
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              JobGuide v1.0.0
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
              Your guide to government job notifications, exam schedules, and study resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
