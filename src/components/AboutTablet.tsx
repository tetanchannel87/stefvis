import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python", level: 78 },
  { name: "Go", level: 70 },
  { name: "Java", level: 72 },
  { name: "PostgreSQL / MongoDB", level: 80 },
  { name: "Docker / CI/CD", level: 75 },
  { name: "REST / GraphQL API", level: 82 },
];

export function AboutTablet() {
  return (
    <div className="flex flex-col overflow-hidden pb-[300px] pt-[120px] w-full relative">
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-neutral-700 to-neutral-500" />
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Scroll
        </p>
        <svg
          className="w-4 h-4 text-neutral-500 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    <ContainerScroll
      titleComponent={
        <>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-neutral-500">
            Обо мне
          </p>
          <h2 className="text-4xl font-semibold text-white mt-3">
            Немного о том, что я делаю <br />
            <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
              и зачем
            </span>
          </h2>
        </>
      }
    >
      <div className="h-full w-full p-4 md:p-10 text-neutral-200 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 h-full">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.25em] text-neutral-500 font-mono">
              // readme.md
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Привет, я Стефан
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Делаю продукты целиком — от интерфейса до базы данных и деплоя.
              Не делю работу на «фронт» и «бэк», для меня это один поток:
              форма поля и индекс в Postgres решают одну задачу.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Стек — React + TypeScript на фронте, Node.js / Express и
              PostgreSQL на бэке, Docker и CI/CD для деплоя. Пишу API, думаю
              про схемы данных и про то, как всё это будет жить под нагрузкой.
              Считаю, что хороший продукт — это когда пользователь не замечает
              ни интерфейс, ни сервер.
            </p>
            <div className="flex gap-2 flex-wrap pt-2">
              {["Frontend", "Backend", "Базы данных", "DevOps", "API"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs border border-neutral-700 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Скилы
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Чем владею
            </h3>
            <ul className="space-y-2 md:space-y-3 pt-2">
              {skills.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm text-neutral-300 mb-1">
                    <span>{s.name}</span>
                    <span className="text-neutral-500">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neutral-200 to-neutral-500 rounded-full"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContainerScroll>
    </div>
  );
}
