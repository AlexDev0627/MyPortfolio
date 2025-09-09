import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: -webkit-linear-gradient(90deg, #000000,#0d1521,#070e18);
  background: linear-gradient(90deg, #000000,#0d1521,#070e18);
  color: #fff;
  padding: 4rem 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          {}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">
              <TypeAnimation
              sequence={[
                "AlexDev_",
                3000,
              ]}
              wrapper='span'
              repeat={Infinity}
              className='text-primary'
              />
            </h5>
            <p>Web developer passionate about creating innovative and engaging digital solutions.</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              <li><FooterLink href="#inicio">Home</FooterLink></li>
              <li><FooterLink href="#sobre-mi">About me</FooterLink></li>
              <li><FooterLink href="#proyectos">Projects</FooterLink></li>
              <li><FooterLink href="#contacto">Contact</FooterLink></li>
            </ul>
          </div>

          {}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Contact</h5>
            <p><i className="bi bi-envelope me-2"></i> yofranksalas@gmail.com</p>
            <p><i className="bi bi-phone me-2"></i>+58 4124119922</p>
            <p><i className="bi bi-geo-alt me-2"></i>Valencia, Estado Carabbo</p>
            <div className="mt-3">
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></SocialIcon>
              <SocialIcon href="https://www.facebook.com/yofrank.salas" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></SocialIcon>
              <SocialIcon href="https://x.com/Alexandro_d27" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
