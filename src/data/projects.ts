export type CategoryType = 'frontend' | 'backend' | 'fullstack';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: CategoryType;
  github: string;
  demo?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    github: 'https://github.com/',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A weather application that provides current and forecasted weather data for any location.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    category: 'frontend',
    github: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, task CRUD operations, and reporting.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'JWT'],
    category: 'backend',
    github: 'https://github.com/'
  },
  {
    id: 4,
    title: 'Personal Blog',
    description: 'A responsive blog platform with content management system and user authentication.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/',
    demo: 'https://example.com'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills (this website).',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/',
    demo: 'https://example.com'
  },
  {
    id: 6,
    title: 'Inventory Management System',
    description: 'A backend system for tracking inventory, orders, and generating reports.',
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['PHP', 'MySQL', 'Laravel', 'RESTful API'],
    category: 'backend',
    github: 'https://github.com/'
  }
];