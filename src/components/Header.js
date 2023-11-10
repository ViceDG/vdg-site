// import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img
            className="logo"
            title="Home"
            alt="Home"
            src="/images/mainLogo.png"
          />
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none hover:ring-2 hover:ring-gray-900 focus:ring-2 focus:ring-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-900 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                class="navLinks block border-solid border-2 border-gray-500 py-2 pl-3 pr-4 text-white-900 bg-gray-900 rounded lg:border-0 lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                class="navLinks block border-solid border-2 border-gray-500 py-2 pl-3 pr-4 text-white-900 bg-gray-900 rounded lg:border-0 lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                class="navLinks block border-solid border-2 border-gray-500 py-2 pl-3 pr-4 text-white-900 bg-gray-900 rounded lg:border-0 lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class="navLinks block border-solid border-2 border-gray-500 py-2 pl-3 pr-4 text-white-900 bg-gray-900 rounded lg:border-0 lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
