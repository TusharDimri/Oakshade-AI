import React from 'react'

import { Helmet } from 'react-helmet'

import Link from '../components/link'
import Work from '../components/work'
import Service from '../components/service'
import Author from '../components/author'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Item from '../components/item'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agency modern template</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img alt="image" src="/logo2-200w.jpg" className="home-image" />
            <img
              alt="image"
              src="/oakai-200h.png"
              className="company-logo-name home-image01"
            />
          </div>
          <div className="home-items">
            <div className="home-links">
              <a href="#work" className="home-link nav-link">
                Work
              </a>
              <a href="#services" className="home-link01 nav-link">
                Services
              </a>
              <a href="#about" className="home-link02 nav-link">
                About
              </a>
              <a href="#footer" className="home-link03 nav-link">
                Contact
              </a>
            </div>
            <a
              href="https://calendly.com/oakshade-ai"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04 start-button button"
            >
              <span className="home-text">Book a Call</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button button">
              <img alt="image" src="/hamburger.svg" className="home-image02" />
              <span className="home-text01">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img
                    alt="image"
                    src="/logo2-200w.jpg"
                    className="home-logo"
                  />
                  <span className="home-company">Oakshade AI</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button1">
                  <span className="home-text06">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="h-bg home-hero">
        <div className="home-header">
          <h1 className="home-title">
            INTELLIGENT Solutions for a dynamic world
          </h1>
          <p className="home-description">
            OakShade is an agency empowering businesses with cutting-edge
            solutions for growth and efficiency.
          </p>
          <video
            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c15bd8a90fafad1f6c9f41_2781013183-transcode.mp4"
            loop
            poster="https://uploads-ssl.webflow.com/626912d685fd092a4de0ab21/626939050934c33c51f2dcbb_2781013183-poster-00001.jpg"
            preload="auto"
            autoPlay
            controls
            className="home-video header-video"
          ></video>
        </div>
        <video
          src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c15bd8a90fafad1f6c9f41_2781013183-transcode.mp4"
          loop
          poster="https://uploads-ssl.webflow.com/626912d685fd092a4de0ab21/626939050934c33c51f2dcbb_2781013183-poster-00001.jpg"
          preload="auto"
          autoPlay
          className="header-video home-video1"
        ></video>
      </header>
      <div className="home-description1">
        <img alt="image" src="/desc-image-800w.png" className="home-image03" />
        <div className="home-content">
          <div className="home-text07">
            <p className="home-paragraph">
              At Oakshade AI, we believe in the power of collaboration and
              continuous learning. Our team is united by a common goal – to
              empower your brand in the digital landscape. Together, we&apos;re
              not just creating solutions; we&apos;re crafting experiences that
              make a lasting impact.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <a
            href="https://calendly.com/oakshade-ai"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link05 start-button button"
          >
            <span className="home-text08">Book a call</span>
          </a>
        </div>
      </div>
      <div id="work" className="home-featured">
        <div className="home-header1">
          <h2 className="home-title1 heading">Featured Work</h2>
          <div className="home-link06">
            <Link
              caption="Our Portfolio"
              rootClassName="link-root-class-name"
            ></Link>
          </div>
        </div>
        <div className="home-list">
          <Work
            description="First MMA course website in India. From course video editing to the design and development of the web application, we handled deployment, paid advertising and social media management as well end to end."
            rootClassName="work-root-class-name1"
          ></Work>
          <Work
            image="/work%20%232-800h.png"
            title="Complete Waterproofing  Solutions Inc."
            description="Complete waterproofing solutions is one of the largest waterproofing solutions provider situated in the heart of capital city of India. We managed design and development of website including advertisements."
            rootClassName="work-root-class-name"
            workLink="https://completewaterproofingsystem.in/"
          ></Work>
          <Work
            image="/work%20%233-800h.png"
            title="Risha"
            description="Risha is a japanese content creator who creates lifestyle vlogs. We managed content strategy, content ideas and video editing for Risha and helped her grow from roots."
            rootClassName="work-root-class-name2"
            workLink="https://www.youtube.com/@risha4265"
          ></Work>
        </div>
      </div>
      <div className="home-client">
        <p className="home-text09">
          Ready to transform your digital presence? Let Oakshade AI be your
          guide to success. We&apos;re passionate about helping businesses like
          yours thrive in the digital landscape. Get in touch today and
          let&apos;s start the journey toward achieving your digital goals.
        </p>
        <a
          href="https://calendly.com/oakshade-ai"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link07 start-button button"
        >
          <span className="home-text10">Book a call</span>
        </a>
        <img alt="image" src="/work-bg-1400w.png" className="home-image04" />
      </div>
      <div id="services" className="home-services">
        <div className="home-header2">
          <h2 className="home-title2 heading">SERVICES</h2>
        </div>
        <div className="home-grid">
          <Service
            title="AI Automation"
            description="Automate your processes by leveraging the power of AI and No Code tools. Cut costs, earn more, and focus on the highest-value activities."
            rootClassName="service-root-class-name"
          ></Service>
          <Service
            title="Branding"
            description="Bring your brand to life and grow it across channels \u2028 through custom strategies, logo design, brand naming and more."
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            title="Marketing"
            description="Our team comprises seasoned marketing professionals, digital strategists, creative minds, and data enthusiasts—all dedicated to propelling your brand to new heights."
            rootClassName="service-root-class-name5"
          ></Service>
          <Service
            title="Video Editing"
            description="Our team of skilled editors, motion graphics artists, and creative minds collaborate to bring your vision to the screen."
            rootClassName="service-root-class-name2"
          ></Service>
          <Service
            title="Web Development"
            description="We analyze your business to design a website which increases conversion rates and produces positive results."
            rootClassName="service-root-class-name4"
          ></Service>
          <Service
            title="UI / UX"
            description="Provide your users with an interactive and delightful experience while using your app."
            rootClassName="service-root-class-name3"
          ></Service>
        </div>
      </div>
      <img
        alt="image"
        src="/about-bg-1500w.png"
        className="home-image05 about-img"
      />
      <div id="about" className="home-about">
        <div className="home-header3">
          <h2 className="home-company1">Oakshade-AI</h2>
          <span className="home-description2">
            At Oakshade AI, we are more than a digital agency — we are your
            strategic partners in the ever-evolving world of technology and
            creativity. Our team is a fusion of talented professionals with
            expertise in web development, video editing, UI design, and
            marketing. Together, we form a collective that thrives on turning
            ideas into reality.
          </span>
          <Author rootClassName="author-root-class-name"></Author>
        </div>
        <div className="home-statistics">
          <button className="home-button2 start-button button">
            <span className="home-text11">Book a Call</span>
          </button>
          <div className="home-statistic-list">
            <Statistic
              value="2"
              rootClassName="statistic-root-class-name3"
            ></Statistic>
            <Statistic
              value="15+"
              caption="Completed Projects"
              rootClassName="statistic-root-class-name"
            ></Statistic>
            <Statistic
              value="5+"
              caption="Countries Reached"
              rootClassName="statistic-root-class-name4"
            ></Statistic>
            <Statistic
              value="10+"
              caption="Clients Onboard"
              rootClassName="statistic-root-class-name1"
            ></Statistic>
            <Statistic
              value="300+"
              caption="Finished projects"
              rootClassName="statistic-root-class-name5"
            ></Statistic>
            <Statistic
              value="1M"
              caption="Active Users"
              rootClassName="statistic-root-class-name2"
            ></Statistic>
          </div>
        </div>
        <div className="home-clients">
          <div className="home-header4">
            <h2 className="home-title3 heading">Our Clients</h2>
          </div>
          <div className="home-grid1">
            <div className="home-column">
              <Client
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="Complete Waterproofing Solutions INC."
                rootClassName="client-root-class-name"
              ></Client>
              <Client
                quote="Collaborating with Oakshade is one of the best part of my YouTube journey. Their support in video editing, creative thumbnails, marketing strategies, and AI automation not only saved me time but also brought a unique blend of creativity to my channel. The team's dedication to fostering collaborations with fellow creators added immense value. As a half-Indian, half-Japanese content creator, their understanding of diverse perspectives has truly made my channel stand out."
                author="Risha"
                avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@risha4265"
                rootClassName="client-root-class-name1"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                quote="Working with Oakshade has been a game-changer for my MMA course. They did website development, coupled it with a strategic marketing approach to promote my course which helped in attracting global audience , helped with video editing and making the course structure, these were one of many reasons for my online mma course success.I recommend them for anyone looking to build their presence in the digital landscape."
                author="Angad Bisht"
                avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="Mutant MMA Academy"
                rootClassName="client-root-class-name3"
              ></Client>
              <Client
                quote="Integrating Oakshade AI solutions into our hotel operations has been the best step for our success. The chatbot streamlines guest interactions, while automation enhances our services seamlessly. The AI-enhanced CRM has significantly improved guest relationships, and the insightful AI consultation for business expansion has set us on a path of sustainable growth. I highly recommend Oakshade for their innovative AI solutions that have elevated our hotel experience and operations."
                author="Pakpoom Wattanapong"
                avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@pak"
                rootClassName="client-root-class-name2"
              ></Client>
            </div>
          </div>
        </div>
        <div className="home-client-list">
          <div className="home-header5">
            <h2 className="home-title4 heading">Client list</h2>
          </div>
          <div className="home-row">
            <span className="home-text12">2022</span>
            <div className="home-list1">
              <Item></Item>
              <Item tags="Webdevelopment / Marketing" title="Aliquaduis"></Item>
              <Item tags="Strategy / Copywriting" title="Consequat"></Item>
              <Item tags="UI / UX" title="Commodo"></Item>
              <Item tags="Webdevelopment" title="Veniam"></Item>
              <Item tags="Webdevelopment / Marketing" title="Fugiat"></Item>
            </div>
          </div>
          <div className="home-row1">
            <span className="home-text13">2021</span>
            <div className="home-list2">
              <Item></Item>
              <Item tags="Webdevelopment / Marketing" title="Aliquaduis"></Item>
              <Item tags="Strategy / Copywriting" title="Consequat"></Item>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header6">
              <div className="home-branding2">
                <img
                  alt="image"
                  src="/logo2-200w.jpg"
                  className="home-image06"
                />
                <img
                  alt="image"
                  src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c2604dd98897490e956514_h.png"
                  className="home-image07"
                />
              </div>
              <div className="home-location">
                <span className="home-value">
                  Fusing AI Precision with Creative Vision
                </span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption">Contact</span>
              <span className="home-value1">oakshade.business@gmail.com</span>
            </div>
            <a
              href="https://calendly.com/oakshade-ai"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08 start-button button"
            >
              <span className="home-text14">Book a call</span>
            </a>
          </div>
          <div className="home-links2">
            <a
              href="https://www.instagram.com/oakshade__ai/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <img
                alt="image"
                src="/instagram-200h.png"
                className="home-image08 footer-img"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100095306772430/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <img
                alt="image"
                src="/facebook-200h.png"
                className="home-image09 footer-img"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/97885691//"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <img
                alt="image"
                src="/linkedin-200h.png"
                className="home-image10 footer-img"
              />
            </a>
            <a
              href="https://twitter.com/OakShade_AI/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <img
                alt="image"
                src="/twitter-200h.png"
                className="home-image11 footer-img"
              />
            </a>
          </div>
        </div>
        <img alt="image" src="/logo-900w.png" className="home-image12" />
      </footer>
    </div>
  )
}

export default Home
