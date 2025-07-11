import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavLink = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  transition: color 0.5s ease-in-out;
  padding: 0.4rem 1rem; 
  font-size: 0.9rem;

  &::after {
    content: '';
    position: absolute;
    width: 95%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color:#007bff;
    transform-origin: bottom right;
    transition: transform 0.45s ease-out;
  }

  &:hover,
  &.active {
    color: #007bff !important;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const StyledButton = styled.a`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin-left: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
    color: white; 
  }
`;

const StyledIconButton = styled.a`
  
  color: white;
  font-size:22px;
  border-radius: 0.25rem;
  text-decoration: none;
  alig-items:center;
  justify-content:center;
  margin-left:30px;
  transition: color 0.4s ease-in-out;

  &:hover {

    color:  #007bff;;
  }
`;

const StyledBrandName = styled.h1`
  color: white;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set active section on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="md" variant="dark" className="py-3" style={{ backgroundColor: 'rgb(13, 21, 33)' }}>
      <Container>
        <Navbar.Brand href="#inicio">
          <StyledBrandName className="h3 mb-0">AlexDev</StyledBrandName>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-column flex-md-row justify-content-md-center w-100">
            <Nav className="flex-grow-1 justify-content-center">
              <NavLink href="#inicio" className={activeSection === 'inicio' ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
              <NavLink href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'nav-link active' : 'nav-link'}>Sobre Mí</NavLink>
              <NavLink href="#proyectos" className={activeSection === 'proyectos' ? 'nav-link active' : 'nav-link'}>Proyectos</NavLink>
              <NavLink href="#contacto" className={activeSection === 'contacto' ? 'nav-link active' : 'nav-link'}>Contacto</NavLink>
            </Nav>
            <div className="d-flex ms-md-auto mt-2 mt-md-0">
              <StyledButton href="#contacto">Contáctame</StyledButton>
              {/* <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></SocialIcon> */}
             
              <StyledIconButton href="https://github.com/AlexDev0627" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></StyledIconButton>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
