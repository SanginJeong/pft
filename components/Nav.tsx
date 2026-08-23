"use client";

const items = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "studies", label: "스터디" },
];

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="mt-4 flex items-center gap-1 rounded-full border border-black/5 bg-white/60 px-2 py-1.5 shadow-sm backdrop-blur-xl">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="rounded-full px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-black/5 hover:text-black"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
