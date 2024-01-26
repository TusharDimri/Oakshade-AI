import React from 'react'

import PropTypes from 'prop-types'

import './statistic.css'

const Statistic = (props) => {
  return (
    <div className={`statistic-statistic ${props.rootClassName} `}>
      <span className="statistic-sta">{props.caption}</span>
      <span className="statistic-sta1">{props.value}</span>
    </div>
  )
}

Statistic.defaultProps = {
  rootClassName: '',
  value: '3',
  caption: 'Years of growth',
}

Statistic.propTypes = {
  rootClassName: PropTypes.string,
  value: PropTypes.string,
  caption: PropTypes.string,
}

export default Statistic
