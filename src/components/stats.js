import React from "react"
import PropTypes from "prop-types"
import CountUp from "react-countup"

const Stats = () => (
  <section className="text-gray-700 body-font border-t border-gray-200">
    <div
      className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={73} duration={2} />
            M+
          </dt>

          <dd className="font-light text-gray-500 dark:text-gray-400">
            Developers
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={100} duration={2} />
            M+
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Public repositories
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={1000} duration={2} />s
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Open source projects
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={15} duration={2} />
            B+
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Contributors
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={90} duration={2} />+
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Top Forbes companies
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">
            <CountUp end={10} duration={2} />
            M+
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Organizations
          </dd>
        </div>
      </dl>
    </div>
  </section>
)

export default Stats
