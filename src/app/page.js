/**
 * v0 by Vercel.
 * @see https://v0.dev/t/or0rNqYxHLi
 */
import React from "react";

import Link from "next/link";
import Contact from "@/components/tools/email";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 primaryBG">
        <h1 className="text-2xl font-bold max-w-sm overflow-hidden hidden sm:block">
          Vice Dev Group
        </h1>
        <nav className="flex flex-wrap gap-4 justify-center w-max lg:m-0 sm:m-auto">
          <Link
            className="text-sm font-medium hover:underline"
            href="#services"
            scroll={true}
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#testimonials"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#portfolio"
          >
            Portfolio
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 secondaryBG">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Vice Dev Group
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are a team of expert software developers specialized in
                  building high-quality web and mobile applications.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 primaryBG"
          id="services"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <CodeIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">Web Development</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We build fast, responsive, and user-friendly websites that
                  meet your business needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <SmartphoneIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">Mobile Development</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We create intuitive and powerful mobile applications for both
                  iOS and Android platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <DatabaseIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">Database Design</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We design efficient and scalable databases to store and manage
                  your valuable data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 secondaryBG"
          id="testimonials"
          name="section2"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              Meet the Team
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://knb-portfolio.netlify.app/"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 primaryBG dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="/images/profiles/kammi.png"
                  alt=""
                />
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kammi Bobbitt
                  </h5>
                  <p class=" font-normal text-gray-700 dark:text-gray-400">
                    Southern California based developer with a history of strong
                    communication, problem solving skills, and a passion for
                    turning solid ideas into a finished product.
                  </p>
                </div>
              </a>

              <a
                href="https://julianbeard.codes/"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 primaryBG dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="/images/profiles/julian.png"
                  alt=""
                />
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Julian Beard
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Southern California based Fullstack Software Engineer with a
                    professional background in highly varied team-based agile
                    software development projects and a versatile skill set.
                  </p>
                </div>
              </a>
              <a
                href="https://angel-puente.herokuapp.com/"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 primaryBG dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="/images/profiles/angel.jpeg"
                  alt=""
                />
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Angel Puente
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400 bioText">
                    Louisiana based engineer with a background in the insurance
                    and finance, skilled in client services and always on the
                    cutting edge of frontend development technologies.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 thirdBG"
          id="portfolio"
          name="section3"
        >
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              Portfolio
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="https://d3fine.me" className="relative block">
                <h1 className="absolute inset-0 flex items-center text-lg justify-center text-white- projectTitle z-10">
                  D3fine
                </h1>
                <img
                  alt="Project 1"
                  className="rounded-lg object-cover w-full aspect-square"
                  height={300}
                  src="images/projects/d3fine.png"
                  width={400}
                />
              </Link>
              <Link href="https://stopjockin.com" className="relative block">
                <h1 className="absolute inset-0 flex items-center justify-center text-white projectTitle z-10">
                  StopJockin
                </h1>
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover w-full aspect-square"
                  height={300}
                  src="images/projects/stopjockin.png"
                  width={400}
                />
              </Link>
              <Link
                href="https://thezenportal.netlify.app/"
                className="relative block"
              >
                <h1 className="absolute inset-0 flex items-center justify-center text-white projectTitle z-10">
                  Zen Portal
                </h1>
                <img
                  alt="Project 3"
                  className="rounded-lg object-cover w-full aspect-square"
                  height={300}
                  src="images/projects/zenportal.png"
                  width={400}
                />
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="flex items-center justify-center h-16 px-6 py-4 primaryBG">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © Vice Dev Group
        </p>
      </footer>

      <iframe
        title="background"
        id="myVideo"
        src="https://streamable.com/e/ngaw1f?autoplay=1&nocontrols=1"
        frameBorder="0"
        width="1920px"
        height="1080px"
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(228, 23, 23)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(228, 23, 23)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(228, 23, 23)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
