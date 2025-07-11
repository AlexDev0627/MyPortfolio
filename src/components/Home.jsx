import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import styled from 'styled-components';
import './Home.css'; // Importacion de el CSS del Home

function Home() {
  return (
    <motion.section 
      id="inicio" 
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 home-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="display-4 fw-bold mb-3 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hola, Me llamo Yofrank<TypeAnimation
          sequence={[
          
            '_', 
            100000,
          ]}
          wrapper="span" 
          repeat={Infinity}
          cursor={true} r
          className="text-primary"
        />
      </motion.h2>
      <TypeAnimation
        sequence={[
          3000,
          'Tambien me puedes llamar Alex_',
          3000, // Espera 1 segundo
          'Soy Desarrollador Web',
          3000,
          'Diseñador UI/UX',
          3000,
          'Apasionado por la Tecnología',
          3000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="p"
        repeat={Infinity}
        className="lead mb-4 text-white"
        style={{ fontSize: '1em' }}
      />
        <motion.a 
          href="#proyectos" 
          className="btn btn-primary btn-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Ver Proyectos
        </motion.a>
      </motion.section>
  );
}

export default Home;
