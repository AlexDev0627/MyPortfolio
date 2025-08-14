import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import './About.css';

// Importacion imágenes de habilidades aquí
import reactLogo from '../assets/react.svg';
import javascriptLogo from '../assets/javascript.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import bootstrapLogo from '../assets/bootstrap.png';
import nodejsLogo from '../assets/nodejs.png';
import databaseLogo from '../assets/database.png';
import Git from '../assets/git.png';
import Linux from '../assets/linux.png';


const skillsData = [
  { name: 'React.js', image: reactLogo },
  { name: 'JavaScript', image: javascriptLogo },
  { name: 'HTML5', image: htmlLogo },
  { name: 'CSS3', image: cssLogo },
  { name: 'Bootstrap', image: bootstrapLogo },
  { name: 'Node.js', image: nodejsLogo },
  { name: 'SQL/NoSQL', image: databaseLogo },
  { name: 'Git', image: Git },
  { name: 'Linux', image: Linux },
];

const AboutTextContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 200px;
`;

function About() {
  return (
    <motion.section
      id="sobre-mi"
      className="py-5 py-5 about-background"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <h2 className="text-center mb-4 text-white">
          About Me<TypeAnimation
            sequence={[
              "_",
              3000, 
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          className="text-primary"

          />
        </h2>
        <div className="row">
          <div className="col-md-12 text-center">
            <AboutTextContainer>
              <motion.p
                className="text-white mb-4"
              >
              I am a passionate web developer with experience creating dynamic and responsive web applications. I love transforming ideas into functional and attractive digital solutions.
              </motion.p>
              <motion.p
                className="text-white mb-5"
              >
                My main focus is frontend development, where I enjoy working with modern technologies like React, JavaScript, and CSS. I also have knowledge of backend development with Node.js and databases  .
              </motion.p>
            </AboutTextContainer>
          </div>
        </div>

        <h3 className="text-center mb-4 text-white">Skills 
          <TypeAnimation
          sequence={[
            "_",
            3000,
          ]}
          wrapper='span'
          speed={10}
          repeat={Infinity}
          className='text-primary'
          />
        </h3>
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <Carousel indicators={false} interval={3000} pause={false}>
              {skillsData.map((skill, idx) => (
                <Carousel.Item key={idx}>
                  <div className="d-flex flex-column align-items-center justify-content-center p-4">
                    <img
                      className="d-block mb-3"
                      src={skill.image}
                      alt={skill.name}
                      style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                    />
                    <h5 className="text-white">{skill.name}</h5>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
