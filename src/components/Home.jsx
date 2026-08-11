import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DotGrid from './DotBackground';
import SpecularButton from './SpecularButton';

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* fondo */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
         <DotGrid
    dotSize={2}
    gap={14}
    baseColor="#2F293A"
    activeColor="#3a1abbff"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
      </div>

      {/* hero section */}
      <motion.section
        id="inicio"
        className="relative z-10 flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-2 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hello, my name is Yofrank
          <TypeAnimation
            sequence={[
              '_',
              100000,
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            className="text-primary"
          />
        </motion.h2>

        <TypeAnimation
          sequence={[
            3000,
            'You can also call me Alex_',
            3000,
            'I am a web developer',
            3000,
            'UI/UX designer',
            3000,
            'Passionate about Technology',
            3000,
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="p"
          repeat={Infinity}
          className="text-lg md:text-xl mb-4 text-white"
        />

        <motion.a
          href="#proyectos"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.8}
            followMouse
            proximity={250}
            autoAnimate={true}
          >
            See Projects
          </SpecularButton>
        </motion.a>
      </motion.section>

    </div>
  );
}

export default Home;