// SVGs from devicons/devicon v2.17.0 (official brand colors).
// Imported with `?raw` to inline as strings and avoid Vite's SVG-as-component bug.
import reactSvg from '../assets/icons/react-original.svg?raw';
import javascriptSvg from '../assets/icons/javascript-original.svg?raw';
import typescriptSvg from '../assets/icons/typescript-original.svg?raw';
import htmlSvg from '../assets/icons/html5-original-wordmark.svg?raw';
import cssSvg from '../assets/icons/css3-original-wordmark.svg?raw';
import tailwindSvg from '../assets/icons/tailwindcss-original.svg?raw';
import nodejsSvg from '../assets/icons/nodejs-original-wordmark.svg?raw';
import mysqlSvg from '../assets/icons/mysql-original.svg?raw';
import postgresqlSvg from '../assets/icons/postgresql-original.svg?raw';
import gitSvg from '../assets/icons/git-original.svg?raw';

export const skillIconMap = {
    'React.js': reactSvg,
    'JavaScript': javascriptSvg,
    'TypeScript': typescriptSvg,
    'HTML5': htmlSvg,
    'CSS3': cssSvg,
    'Tailwind CSS': tailwindSvg,
    'Node.js': nodejsSvg,
    'MySQL': mysqlSvg,
    'PostgreSQL': postgresqlSvg,
    'SQL/NoSQL': null,
    'Git': gitSvg,
    'Linux': null,
};
