import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <header className={`hero-hero ${props.rootClassName} `}>
      <div className="hero-header">
        <div className="hero-container">
          <div className="hero-container1">
            <div className="hero-container2">
              <h1 className="hero-title">{props.title}</h1>
            </div>
          </div>
        </div>
        <p className="hero-description">{props.description}</p>
        <video
          src={props.videoSrc}
          loop
          poster="https://uploads-ssl.webflow.com/626912d685fd092a4de0ab21/626939050934c33c51f2dcbb_2781013183-poster-00001.jpg"
          autoPlay
          className="hero-video header-video"
        ></video>
      </div>
    </header>
  )
}

Hero.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur tempor incididunt.',
  title: 'INTELLIGENT Solutions for a dynamic world',
  rootClassName: '',
  videoSrc:
    'https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c15bd8a90fafad1f6c9f41_2781013183-transcode.mp4',
}

Hero.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  videoSrc: PropTypes.string,
}

export default Hero
