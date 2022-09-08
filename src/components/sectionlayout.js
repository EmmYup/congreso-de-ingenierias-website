import React from "react"
import PropTypes from "prop-types"

const SectionLayout = props => {
  const {
    id,
    children,
    title,
    subtitle,
    onClick,
    buttonLabel,
    hideButton = false,
  } = props
  return (
    <section class="text-gray-700 body-font border-t border-gray-200" id={id}>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {title}
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">{subtitle}</p>
        </div>
        <div class="flex flex-wrap -m-4">{children}</div>
      </div>
      <button
        className={`${
          hideButton ? "hidden" : ""
        } flex mx-auto my-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </section>
  )
}

export default SectionLayout

SectionLayout.propTypes = {
  childen: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
