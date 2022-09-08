import React from "react"
import { Link } from "gatsby"
import { guid } from "react-agenda"
import scrollTo from "gatsby-plugin-smoothscroll"

const publicPages = [
  {
    id: guid(),
    title: "Home",
    url: "/",
  },
  {
    id: guid(),
    title: "Agenda",
    url: "/agenda",
  },
  {
    id: guid(),
    title: "Ingenierías",
    url: "#ingenierias",
  },
  {
    id: guid(),
    title: "Ponentes",
    url: "#speakers",
  },
  {
    id: guid(),
    title: "Proyectos",
    url: "#proyectos",
  },
  {
    id: guid(),
    title: "Competencias",
    url: "#competencias",
  },
]

const NavigationLink = ({ url, title }) => (
  <Link
    to={url}
    activeStyle={{ color: "white" }}
    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline"
  >
    {title}
  </Link>
)

const ScrollLink = ({ url, title }) => (
  <Link
    activeStyle={{ color: "white" }}
    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline"
  >
    <button onClick={() => scrollTo(url)}>{title}</button>
  </Link>
)

const Navbar = () => (
  <nav className="p-3 bg-gray-50 fixed w-full z-20 top-0 left-0 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" className="flex items-center no-underline">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-10"
          alt="Flowbite Logo"
        />
      </a>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          {/* <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent no-underline"
              aria-current="page"
            >
              Home
            </a>
          </li> */}

          {publicPages.map(({ id, ...rest }) => (
            <li key={id}>
              {rest.url.startsWith("#") ? (
                <ScrollLink {...rest} />
              ) : (
                <NavigationLink {...rest} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
