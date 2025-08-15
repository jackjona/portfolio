import Image from "next/image";

export const metadata = {
  title: "Jack Jona",
  description:
    "A Front-End Web Developer, Building Web Experiences That People Love To Use. ",
};

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center ">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt=""
          width={180}
          height={38}
          priority
        />

        <div className="flex items-center flex-col text-center">
          <h1 className="text-8xl font-extrabold">Jack Jona</h1>
          <h2 className="text-4xl font-semibold mt-10 capitalize">
            Hi, my name is Jack Jona! I am a Front-End Web Developer, Building
            Web Experiences That People Love To Use.
          </h2>
        </div>
        <div className="text-2xl mt-10 text-center">
          <p>
            First of all, thank you for visiting my website! I build experiences
            on the internet that people love to use and enjoy interacting with.
          </p>
          <div>
            <h3 className="mt-8 mb-4">Some of my projects include:</h3>
            <ul>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/lookup"
                  rel="noreferrer"
                  target="_blank"
                >
                  LookUp - A real-time overhead flight identifier
                </a>
              </li>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/uoft-course-peek"
                  rel="noreferrer"
                  target="_blank"
                >
                  UofT Course Peek – A Browser Extension to Reveal University of
                  Toronto Course Titles, Descriptions, and Prereqs with a Quick
                  Hover
                </a>
              </li>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/charactalk"
                  rel="noreferrer"
                  target="_blank"
                >
                  CharacTalk - Interactive Character Chats & Infinite Storylines
                  Powered By AI
                </a>
              </li>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/vidore"
                  rel="noreferrer"
                  target="_blank"
                >
                  Vidore - A Modern Video Discovery & Streaming Site.
                </a>
              </li>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/trending-movies-newsletter"
                  rel="noreferrer"
                  target="_blank"
                >
                  Trending Movies Newsletter – A Serverless App for Emailing
                  Today’s Trending Movies
                </a>
              </li>
              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/modern-apparel"
                  rel="noreferrer"
                  target="_blank"
                >
                  Modern Apparel - A Static Website For An E-commerce Site
                </a>
              </li>

              <li>
                <a
                  className="hover:underline capitalize"
                  href="https://github.com/jackjona/anitaku"
                  rel="noreferrer"
                  target="_blank"
                >
                  Anitaku - A simple anime image & gif generator
                </a>
              </li>
            </ul>
            <div className="mt-5 text-md">
              Note: This is a small selections of all my projects. To view all
              of them please visit my{" "}
              <a
                className="underline"
                href="https://github.com/jackjona"
                rel="noreferrer"
                target="_blank"
              >
                GitHub.
              </a>
            </div>
          </div>
          <div className="text-2xl mt-10">
            Some of my skills include: TypeScript, JavaScript(ES6+), HTML,
            CSS/Scss/Sass Frameworks & Others React.js, Gatsby.js, Next.js,
            Firebase, Framer Motion, GSAP, Styled Components, Tailwind CSS, Git,
            NPM, PWA UI/UX Responsive Design, Prototyping, Figma, Adobe
            Photoshop, Usability Testing Learning Node.js, Vue.js, Python Other
            Skills Networking, Systems Administration, Photography and Media
            Production
          </div>
        </div>
      </main>
      <footer>
        <div className="mt-20 text-center">
          <a
            href="mailto:contact@jackjona.com"
            className="text-4xl hover:text-blue-600 font-bold no-underline hover:underline"
          >
            Got Some Ideas? Let’s Talk.
          </a>
          <div className="mt-18 text-sm">
            <p>
              {/*          © {new Date().getFullYear()} No rights reserved.  */}
              This project is open source under the GNU General Public License
              v3.
            </p>
            <p>
              <a
                href="https://github.com/jackjona/portfolio"
                rel="noreferrer"
                target="_blank"
                className="underline "
              >
                View Source on GitHub
              </a>
            </p>
          </div>

          {/*  <a
            className="hover:underline text-3xl font-normal"
            href="https://github.com/jackjona"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a> */}
        </div>
      </footer>
    </div>
  );
}
