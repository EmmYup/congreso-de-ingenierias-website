import React from "react"
import PropTypes from "prop-types"

const SpeakerCard = ({ imageUrl, fullName, jobTitle }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={imageUrl}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{fullName}</h2>
          <p className="text-gray-500">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard

SpeakerCard.propTypes = {
  imageUrl: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}
