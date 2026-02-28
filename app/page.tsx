import MobileHeader from "@/components/MobileHeader";

const jobs = [
  {
    id: 1,
    title: "Staff Selection Commission (SSC CGL)",
    organization: "Staff Selection Commission",
    category: "Central Government",
    deadline: "2026-03-15",
    vacancies: 17727,
  },
  {
    id: 2,
    title: "UPSC Civil Services Examination",
    organization: "Union Public Service Commission",
    category: "Central Government",
    deadline: "2026-02-20",
    vacancies: 1056,
  },
  {
    id: 3,
    title: "Railway Recruitment Board (RRB NTPC)",
    organization: "Railway Recruitment Board",
    category: "Railways",
    deadline: "2026-04-01",
    vacancies: 35281,
  },
  {
    id: 4,
    title: "IBPS PO Recruitment",
    organization: "Institute of Banking Personnel Selection",
    category: "Banking",
    deadline: "2026-03-30",
    vacancies: 4455,
  },
];

export default function HomePage() {
  return (
    <div>
      <MobileHeader title="JobGuide" />
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Hero */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{ backgroundColor: "var(--primary)", color: "#fff" }}
        >
          <h2 className="text-2xl font-bold mb-2">Find Your Dream Job</h2>
          <p className="text-sm opacity-90">
            Stay updated with the latest government job notifications, exam schedules, and study materials.
          </p>
          <div className="mt-4 flex gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs opacity-80">Active Jobs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs opacity-80">Exams This Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-xs opacity-80">Study Books</p>
            </div>
          </div>
        </div>

        {/* Latest Jobs */}
        <section>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Latest Job Notifications
          </h3>
          <div className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4
                      className="font-semibold text-sm truncate"
                      style={{ color: "var(--foreground)" }}
                    >
                      {job.title}
                    </h4>
                    <p
                      className="text-xs mt-1 truncate"
                      style={{ color: "var(--muted)" }}
                    >
                      {job.organization}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap select-none"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      opacity: 0.9,
                    }}
                  >
                    {job.category}
                  </span>
                </div>
                <div
                  className="flex items-center gap-4 mt-3 text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  <span>Vacancies: {job.vacancies.toLocaleString()}</span>
                  <span>Deadline: {job.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
