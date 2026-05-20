const items = [
  "FRONTEND",
  "BACKEND",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRES",
  "DOCKER",
  "API DESIGN",
  "PIXEL PERFECT UI",
  "CLEAN CODE",
  "3D / WEBGL",
  "ANIMATIONS",
  "DEVOPS",
  "PYTHON",
  "GO",
  "JAVA",
  "FULL-STACK",
  "WEB DEVELOPMENT",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="fixed top-0 left-0 right-0 z-40 overflow-hidden border-b border-neutral-800/60 bg-black/40 backdrop-blur-xl">
      <div className="flex whitespace-nowrap py-3 marquee-track">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mx-6 text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-300 flex items-center gap-6"
          >
            {t}
            <span className="text-neutral-600">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
