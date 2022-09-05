import React from "react"
import PropTypes from "prop-types"

const Stats = () => (
  <section class="text-gray-700 body-font border-t border-gray-200">
    <div
      class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Developers
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Public repositories
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Open source projects
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Contributors
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">90+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Top Forbes companies
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            Organizations
          </dd>
        </div>
      </dl>
    </div>
  </section>
)

export default Stats
