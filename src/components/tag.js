import React from 'react'

import PropTypes from 'prop-types'

import './tag.css'

const Tag = (props) => {
  return (
    <div className={`tag-container ${props.rootClassName} `}>
      <span className="tag-tag tag">{props.tag}</span>
    </div>
  )
}

Tag.defaultProps = {
  rootClassName: '',
  tag: 'Branding',
}

Tag.propTypes = {
  rootClassName: PropTypes.string,
  tag: PropTypes.string,
}

export default Tag
