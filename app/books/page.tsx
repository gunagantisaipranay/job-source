import MobileHeader from "@/components/MobileHeader";

const books = [
  {
    id: 1,
    title: "Quantitative Aptitude for Competitive Examinations",
    author: "R.S. Aggarwal",
    subject: "Mathematics",
    rating: 4.8,
  },
  {
    id: 2,
    title: "A Modern Approach to Verbal & Non-Verbal Reasoning",
    author: "R.S. Aggarwal",
    subject: "Reasoning",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Lucent's General Knowledge",
    author: "Binay Karna",
    subject: "GK",
    rating: 4.6,
  },
  {
    id: 4,
    title: "Word Power Made Easy",
    author: "Norman Lewis",
    subject: "English",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Indian Polity",
    author: "M. Laxmikanth",
    subject: "Polity",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Certificate Physical and Human Geography",
    author: "Goh Cheng Leong",
    subject: "Geography",
    rating: 4.5,
  },
];

const subjectColors: Record<string, string> = {
  Mathematics: "#ef4444",
  Reasoning: "#8b5cf6",
  GK: "#10b981",
  English: "#3b82f6",
  Polity: "#f59e0b",
  Geography: "#06b6d4",
};

export default function BooksPage() {
  return (
    <div>
      <MobileHeader title="Books" showBack />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2
          className="hidden md:block text-2xl font-bold mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Study Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-xl p-4 border flex gap-4"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--card-border)",
              }}
            >
              <div
                className="w-12 h-16 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor:
                    subjectColors[book.subject] ?? "var(--primary)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p
                  className="font-semibold text-sm leading-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  {book.title}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {book.author}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium select-none"
                    style={{
                      backgroundColor:
                        subjectColors[book.subject] ?? "var(--primary)",
                      color: "#fff",
                    }}
                  >
                    {book.subject}
                  </span>
                  <span
                    className="text-xs flex items-center gap-0.5"
                    style={{ color: "#f59e0b" }}
                  >
                    ★ {book.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
