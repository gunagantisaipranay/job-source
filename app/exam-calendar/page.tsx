import MobileHeader from "@/components/MobileHeader";

const months = [
  {
    month: "March 2026",
    exams: [
      { date: "Mar 2", name: "SSC CHSL Tier-I", type: "Written" },
      { date: "Mar 8", name: "IBPS PO Interview", type: "Interview" },
      { date: "Mar 15", name: "RRB Group D CBT", type: "Written" },
      { date: "Mar 22", name: "UPSC CAPF", type: "Written" },
      { date: "Mar 28", name: "SBI Clerk Prelims", type: "Written" },
    ],
  },
  {
    month: "April 2026",
    exams: [
      { date: "Apr 5", name: "SSC CGL Tier-I", type: "Written" },
      { date: "Apr 12", name: "UPSC CSE Prelims", type: "Written" },
      { date: "Apr 18", name: "RRB NTPC CBT-2", type: "Written" },
      { date: "Apr 25", name: "IBPS Clerk Interview", type: "Interview" },
    ],
  },
];

const typeColors: Record<string, string> = {
  Written: "#3b82f6",
  Interview: "#10b981",
  "Skill Test": "#f59e0b",
};

export default function ExamCalendarPage() {
  return (
    <div>
      <MobileHeader title="Exam Calendar" showBack />
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h2
          className="hidden md:block text-2xl font-bold mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Exam Calendar
        </h2>
        <div className="space-y-8">
          {months.map((monthData) => (
            <section key={monthData.month}>
              <h3
                className="text-base font-semibold mb-3 pb-2"
                style={{
                  color: "var(--foreground)",
                  borderBottom: "1px solid var(--card-border)",
                }}
              >
                {monthData.month}
              </h3>
              <div className="space-y-2">
                {monthData.exams.map((exam) => (
                  <div
                    key={exam.name}
                    className="rounded-xl p-4 border flex items-center justify-between gap-3"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="text-center flex-shrink-0 w-12"
                        style={{ color: "var(--primary)" }}
                      >
                        <p className="text-xs font-bold">{exam.date.split(" ")[0]}</p>
                        <p className="text-sm font-semibold">{exam.date.split(" ")[1]}</p>
                      </div>
                      <p
                        className="font-medium text-sm truncate"
                        style={{ color: "var(--foreground)" }}
                      >
                        {exam.name}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap select-none"
                      style={{
                        backgroundColor: typeColors[exam.type] ?? "var(--primary)",
                        color: "#fff",
                      }}
                    >
                      {exam.type}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
