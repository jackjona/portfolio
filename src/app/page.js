import Image from "next/image";
import ArrowIcon from "./components/ArrowIcon";

export const metadata = {
  title: "Jack Jona",
  description:
    "A Front-End Web Developer, building web experiences that people love to use.",
};

// Skills array
const SKILLS = [
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML",
  "CSS / SCSS / Sass",
  "React.js",
  "Gatsby.js",
  "Next.js",
  "Firebase",
  "Framer Motion",
  "Styled Components",
  "Tailwind CSS",
  "Git",
  "NPM",
  "Progressive Web Apps (PWA)",
  "Responsive Design",
  "Prototyping",
  "Figma",
  "Adobe Photoshop",
  "Usability Testing",
  "Node.js",
  "Python",
  "Networking",
  "Systems Administration",
  "Photography & Media Production",
];

// Projects data array
const PROJECTS = [
  {
    name: "LookUp",
    description: "A real-time overhead flight identifier",
    live: "https://plane-lookup.netlify.app/",
    repo: "https://github.com/jackjona/lookup",
  },
  {
    name: "UofT Course Peek",
    description:
      "Browser extension to reveal course titles, descriptions, and prereqs with a quick hover",
    live: null,
    repo: "https://github.com/jackjona/uoft-course-peek",
  },
  {
    name: "CharacTalk",
    description:
      "Interactive character chats and infinite storylines powered by AI",
    live: "https://charactalk.netlify.app/",
    repo: "https://github.com/jackjona/charactalk",
  },
  {
    name: "Vidore",
    description: "A modern video discovery and streaming site",
    live: "https://vidore.netlify.app",
    repo: "https://github.com/jackjona/vidore",
  },
  {
    name: "Trending Movies Newsletter",
    description: "Serverless app for emailing today’s trending movies",
    live: "https://trending-movies.cyyz.workers.dev",
    repo: "https://github.com/jackjona/trending-movies-newsletter",
  },
  {
    name: "Modern Apparel",
    description: "Static website for an e-commerce brand",
    live: "https://modernapparel.netlify.app/",
    repo: "https://github.com/jackjona/modern-apparel",
  },
  {
    name: "Anitaku",
    description: "Simple anime image and GIF generator",
    live: "https://anitaku.vercel.app",
    repo: "https://github.com/jackjona/anitaku",
  },
];

// Bento pattern (repeats automatically for dynamic layouts)
// Mobile fallback base is 1 column (only starts with sm)
const BENTO_PATTERN = [
  "sm:col-span-3",
  "sm:col-span-3",
  "sm:col-span-2",
  "sm:col-span-4",
  "sm:col-span-4",
  "sm:col-span-2",
  "sm:col-span-6",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:px-20 font-sans">
      <main className="w-full max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        <Image
          className="dark:invert rounded-3xl"
          src="/logo.png"
          alt="Jack Jona logo"
          width={180}
          height={38}
          priority
        />

        <header className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight">
            Jack Jona
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-balance text-gray-700 dark:text-gray-300">
            Hi, I&apos;m Jack — A Front-End Web Developer focused on building
            web experiences people love to use.
          </p>
        </header>

        <section
          aria-labelledby="intro"
          className="text-lg sm:text-xl leading-relaxed"
        >
          <h2 id="intro" className="sr-only">
            Introduction
          </h2>
          <p>
            First of all, thank you for visiting my website! I build experiences
            on the internet that people love to use and enjoy interacting with.
          </p>
        </section>

        <section aria-labelledby="projects" className="w-full">
          <h2
            id="projects"
            className="mt-2 mb-6 text-2xl sm:text-3xl font-semibold"
          >
            Some of my projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {PROJECTS.map(({ name, description, live, repo }, i) => {
              const spanClass = BENTO_PATTERN[i % BENTO_PATTERN.length];
              return (
                <article
                  key={name}
                  className={[
                    "group relative rounded-xl border border-gray-200 dark:border-gray-800",
                    "bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm",
                    "p-5 text-left transition duration-300 ease-out",
                    "hover:-translate-y-0.5 hover:shadow-sm",
                    spanClass,
                  ].join(" ")}
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {description}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-gray-300 dark:border-gray-700
                                   px-2.5 py-1 text-xs text-gray-800 dark:text-gray-200
                                   hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900
                                   transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-label={`${name} live site`}
                      >
                        Live <ArrowIcon />
                      </a>
                    )}
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-gray-300 dark:border-gray-700
                                 px-2.5 py-1 text-xs text-gray-800 dark:text-gray-200
                                 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900
                                 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={`${name} GitHub repository`}
                    >
                      GitHub <ArrowIcon />
                    </a>
                  </div>

                  {/* subtle corner accent on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent 
                               group-hover:ring-gray-300 dark:group-hover:ring-gray-700 transition"
                    aria-hidden
                  />
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
            Note: This is a small selection. For all projects, visit my{" "}
            <a
              className="underline hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              href="https://github.com/jackjona"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="skills" className="w-full">
          <h2
            id="skills"
            className="mt-10 mb-4 text-2xl sm:text-3xl font-semibold"
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm 
                           text-gray-800 dark:text-gray-200 cursor-pointer
                           transition duration-200 ease-in-out
                           hover:bg-blue-100 dark:hover:bg-blue-900
                           hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full max-w-3xl mx-auto text-center mt-12">
        <a
          href="mailto:contact@jackjona.com"
          className="inline-block text-2xl sm:text-4xl font-bold no-underline hover:underline 
                     hover:text-blue-600 focus:outline-none focus-visible:ring-2 
                     focus-visible:ring-blue-500"
        >
          Got some ideas? Let&apos;s talk.
        </a>

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>
            This project is open source under the GNU General Public License v3.
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/jackjona/portfolio"
              rel="noopener noreferrer"
              target="_blank"
              className="underline hover:text-blue-600 focus:outline-none 
                         focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View source on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
