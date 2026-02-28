import MobileHeader from "@/components/MobileHeader";

const notifications = [
  {
    id: 1,
    title: "SSC CGL 2026 Notification Released",
    description: "Apply online for 17,727 vacancies before March 15, 2026.",
    time: "2 hours ago",
    isNew: true,
  },
  {
    id: 2,
    title: "UPSC Prelims 2026 Admit Card",
    description: "Download your admit card from the official UPSC website.",
    time: "5 hours ago",
    isNew: true,
  },
  {
    id: 3,
    title: "RRB NTPC Result Declared",
    description: "Check your score on the official RRB website.",
    time: "1 day ago",
    isNew: false,
  },
  {
    id: 4,
    title: "IBPS PO Interview Schedule",
    description: "Interview dates announced for shortlisted candidates.",
    time: "2 days ago",
    isNew: false,
  },
  {
    id: 5,
    title: "SBI Clerk Recruitment 2026",
    description: "5000+ vacancies open. Last date: April 30, 2026.",
    time: "3 days ago",
    isNew: false,
  },
];

export default function NotificationsPage() {
  return (
    <div>
      <MobileHeader title="Notifications" showBack />
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h2
          className="hidden md:block text-2xl font-bold mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Notifications
        </h2>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="rounded-xl p-4 border flex items-start gap-3"
              style={{
                backgroundColor: "var(--card)",
                borderColor: n.isNew ? "var(--primary)" : "var(--card-border)",
              }}
            >
              <div
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: n.isNew ? "var(--primary)" : "var(--card-border)",
                }}
              />
              <div className="min-w-0">
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {n.title}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {n.description}
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: "var(--muted)" }}
                >
                  {n.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
