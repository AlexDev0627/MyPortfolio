import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importacion de el CSS de Bootstrap Icons
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importacion de el CSS de Bootstrap Icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importacion de el CSS de AOS
import App from './App.jsx'

AOS.init(); // Inicializando AOS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
