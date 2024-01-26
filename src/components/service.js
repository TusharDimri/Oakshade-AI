import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-service ${props.rootClassName} `}>
      <h3 className="service-title">{props.title}</h3>
      <span className="service-description">{props.description}</span>
    </div>
  )
}

Service.defaultProps = {
  title: 'BRANDING',
  rootClassName: '',
  description:
    'Provide your users with an interactive and delightful experience while using your app.',
}

Service.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default Service
