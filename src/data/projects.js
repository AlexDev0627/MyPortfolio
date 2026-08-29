import proyecto1 from '../assets/proyecto1.png';
import proyecto2 from '../assets/proyecto2.png';
import proyecto3 from '../assets/tatto-blood.png';
import proyecto4 from '../assets/proyecto4.png';

/**
 * Lista de proyectos del portafolio.
 * Cada proyecto tiene: id, title, description, image y link externo.
 */
export const projects = [
    {
        id: 1,
        title: 'Global Next Trading',
        description:
            'Corporate website for a transportation and logistics company. Showcases their fleet, routes, and services with a modern, responsive design that helps clients request quotes and get in touch.',
        image: proyecto4,
        link: 'https://globalnexttrading.com/',
    },
    {
        id: 2,
        title: 'Villa Escondida',
        description:
            'A hotel website where guests can browse rooms, check availability, and book their stay online with a secure reservation flow.',
        image: proyecto2,
        link: 'https://villa-escondida.kesug.com/?i=1',
    },
    {
        id: 3,
        title: 'Tattoos Blood',
        description:
            'Studio site for a tattoo artist. World-class experience presented in a clean interface — portfolio, services, and booking inquiries, all in one place.',
        image: proyecto3,
        link: 'https://tattos-blood.vercel.app/',
    },
];
