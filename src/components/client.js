import React from 'react'

import PropTypes from 'prop-types'

import './client.css'

const Client = (props) => {
  return (
    <div className={`client-client ${props.rootClassName} `}>
      <span className="client-text">{props.quote}</span>
      <div className="client-author">
        <img alt="image" src={props.avatar} className="client-avatar" />
        <div className="client-details">
          <span className="client-text1">{props.author}</span>
          <span className="client-text2">{props.mention}</span>
        </div>
      </div>
    </div>
  )
}

Client.defaultProps = {
  mention: 'Complete Waterproofing Solutions Inc.',
  quote:
    "Oakshade did design, development, and SEO for our company's website( Complete Waterproofing System Inc.), not only did they make an amazing website but they were also very reliable and understanding of the client's needs and requirements. I recommend them.",
  rootClassName: '',
  avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
  author: 'Sakshi Nautiyal',
}

Client.propTypes = {
  mention: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  avatar: PropTypes.string,
  author: PropTypes.string,
}

export default Client
