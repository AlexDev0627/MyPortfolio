import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

const StyledInput = styled.input`
  background-color: rgb(25, 35, 45); 
  color: white; /* Texto blanco */
  border: 1px solid rgb(50, 60, 70); 
  &:focus {
    background-color: rgb(30, 40, 50);
    border-color: #007bff;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledTextArea = styled.textarea`
  background-color: rgb(25, 35, 45); 
  color: white; /* Texto blanco */
  border: 1px solid rgb(50, 60, 70); 
  &:focus {
    background-color: rgb(30, 40, 50);
    border-color: #007bff;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podria añadir lógica adicional antes de enviar, como validación
    console.log('Formulario enviado:', formData);
    // Formspree manejará el envío real a través del atributo action del formulario
  };

  return (
    <motion.section 
      id="contacto" 
      className="bg-transparent home-background"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ paddingTop: '200px', paddingBottom: '200px' }}
    >
      <div className="container">
        <h2 className="text-center mb-4 text-white">Contactame
          <TypeAnimation
          sequence={[
            "!",
            3000,
          ]}
          wrapper='span'
          repeat={Infinity}
          className='text-primary'
          />
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/yourformid" // ¡IMPORTANTE: Reemplazar con mi URL de Formspree!
              method="POST"
            >
              <div className="mb-3 text-white">
                <label htmlFor="name" className="form-label">Nombre</label>
                <StyledInput type="text" className="form-control" id="name" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3 text-white">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <StyledInput type="email" className="form-control" id="email" name="_replyto" placeholder="tu.email@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3 text-white">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <StyledTextArea className="form-control" id="message" name="message" rows="5" placeholder="Tu Mensaje" value={formData.message} onChange={handleChange} required></StyledTextArea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensaje
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
