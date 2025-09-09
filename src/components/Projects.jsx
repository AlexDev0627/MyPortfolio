import React from 'react';
import { motion } from 'framer-motion';
import proyecto1 from'../assets/proyecto1.png';
import proyecto2 from'../assets/proyecto2.png';
import proyecto3 from'../assets/proyecto3.png';
import { TypeAnimation } from 'react-type-animation';


const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web development services website, where clients can see the services I offer and contact me.',
    image: proyecto1, // Placeholder image
    link: 'https://nex-tech-git-main-alexdev0627s-projects.vercel.app/',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A hotel website where guests can book their rooms online and securely.',
    image: proyecto2, // Placeholder image
    link: 'https://posadaprogramacion.kesug.com/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A video game website where people can access thousands of games. COMING SOON...',
    image: proyecto3, // Placeholder image
    link: '#',
  },
];

function Projects() {
  return (
    <motion.section 
      id="proyectos" 
      className="py-5 py-5 bg-transparent home-background"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <h2 className="text-center mb-4 text-white">My projects
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
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectsData.map((project) => (
            <div className="col" key={project.id}>
              <motion.div 
                className="card h-100 shadow-sm bg-dark text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
