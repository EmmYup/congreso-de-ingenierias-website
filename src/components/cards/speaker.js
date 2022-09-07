import React from "react"
import PropTypes from "prop-types"

const SpeakerCard = ({
  id,
  name,
  lastName,
  jobTitle,
  profilePicture: { url },
}) => {
  return (
    <div key={id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={url}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{`${name} ${lastName}`}</h2>
          <p className="text-gray-500">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard

SpeakerCard.propTypes = {
  id: PropTypes.string.isRequired,
  profilePicture: PropTypes.shape({ url: PropTypes.string }).isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}
