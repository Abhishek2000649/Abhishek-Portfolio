
import { Project, Skill, Experience } from './types';
import eventImg from './assets/ems.png';
import chefkartImg from './assets/chefkart.png';
import bulkfuelImg from './assets/bulkfuel.png';
import growthImg from './assets/growth.jpg';
export const PROJECTS: Project[] = [
  
  {
    id: 1,
    title: 'ChefKart',
    description: 'A specialized food service booking platform connecting professional chefs with household customers.',
    image: chefkartImg,
    features: [
      'User authentication & profile management',
      'Service booking workflow',
      'Chef registration & application process',
      'Home-visit preparation scheduling',
      'Secure payment processing'
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'React'],
    githubLink: 'https://github.com/Abhishek2000649',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'BulkFuel',
    description: 'B2B e-commerce platform designed for industrial and commercial bulk fuel ordering.',
    image: bulkfuelImg,
    features: [
      'Quantity-based tiered pricing',
      'Full order lifecycle management',
      'Vendor processing & delivery scheduling',
      'Advanced Admin panel for logistics',
      'REST API integration for external services'
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Angular', 'REST APIs'],
    githubLink: 'https://github.com/Abhishek2000649',
    demoLink: 'https://bulkfuel.vercel.app/'
  },
  {
    id: 3,
    title: 'Event Management System',
    description: 'A comprehensive role-based web application for managing corporate and social events efficiently.',
    image: eventImg,
    features: [
      'Role-based system (Admin/Manager/User)',
      'Event assignment and tracking',
      'Interactive acceptance/rejection workflow',
      'Participant management & multi-user sync',
      'Automated email notifications'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'AJAX', 'Blade'],
    githubLink: 'https://github.com/Abhishek2000649',
    demoLink: '#'
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', icon: '🎨' },
  { name: 'JavaScript', category: 'Frontend', icon: '📜' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Angular', category: 'Frontend', icon: '🅰️' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🌊' },
  { name: 'Bootstrap', category: 'Frontend', icon: '🅱️' },
  { name: 'PHP', category: 'Backend', icon: '🐘' },
  { name: 'Laravel', category: 'Backend', icon: '🏗️' },
  { name: 'REST APIs', category: 'Backend', icon: '🔌' },
  { name: 'MySQL', category: 'Database', icon: '💾' },
  { name: 'Git', category: 'Tools', icon: '🔧' },
  { name: 'GitHub', category: 'Tools', icon: '🐙' },
  { name: 'Postman', category: 'Tools', icon: '🚀' },
  { name: 'VS Code', category: 'Tools', icon: '💻' }
];

export const INTERNSHIP: Experience = {
  role: 'PHP / Laravel Intern',
  company: 'Aeologic Technologies Pvt Ltd',
  location: 'Noida, Uttar Pradesh',
  period: 'July 2025 – Present',
  image: growthImg,
  responsibilities: [
    'Gained hands-on experience with PHP and the Laravel framework using MVC architecture.',
    'Assisted in developing features such as routing, controllers, models, and Blade templates.',
    'Worked with MySQL for data storage, complex queries, and database migrations.',
    'Fixed bugs, improved UI components, and implemented robust form validations.',
    'Collaborated with team members to understand and deliver application requirements.'
  ]
};
