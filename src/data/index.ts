import { Code, Bot, Cloud } from 'lucide-react';

// --- EDUCATION ---
export const education = [
  {
    institution: 'Lovely Professional University, Jalandhar, Punjab (Bachelor of Technology (B.Tech), Computer Science and Engineering, Graduation)',
    degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
    duration: 'Jul 2023 – Aug 2027',
    grade: 'A',
    skills: ['Engineering', 'CSS', 'Freelancing', 'C', 'HTML5'],
    image: '/lpu.webp', // placeholder
  },
  {
    institution: 'Indraprastha Global School, Noida (High School Diploma, PCM with Computer Science, 12th)',
    degree: 'High School Diploma, PCM with Computer Science',
    duration: 'May 2021 – Mar 2023',
    grade: 'A',
    activities: ['Project Management'],
    skills: ['New Product Ideas', 'Project Management', 'MySQL', 'Team Building', 'Python'],
    image: '/IPGS.webp', // placeholder
  },
  {
    institution: 'Saraswati Vidya Mandir (8th to 10th – Liberal Arts and Sciences, 10th)',
    degree: '8th to 10th – Liberal Arts and Sciences',
    duration: 'Apr 2017 – Mar 2021',
    grade: 'B+',
    activities: ['Football', 'Cricket', 'Chess', 'Quizzes', 'Swimming', 'Public Speaking'],
    skills: ['Public Speaking', 'Swimming'],
    image: '/saraswati.webp', // placeholder
  },
];

// --- SKILLS ---
export const skills = [
    { name: 'C', icon: 'c' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'python' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'PHP', icon: 'php' },
    { name: 'SQL', icon: 'mysql' },
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'jQuery', icon: 'jquery' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'SDA (DSA)', icon: '' },
    { name: 'GitHub', icon: 'github' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'UI/UX', icon: '' }
];

// --- CERTIFICATIONS ---
export const certifications = [
  {
    name: 'Hardware and Operating System Essentials',
    issuer: 'Coursera',
    issued: 'Aug 2024',
    skills: ['Operating Systems', 'Computer Hardware'],
    image: '/photo4.jpg', // placeholder
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issued: 'Nov 2023',
    skills: ['HTML5', 'CSS', 'Responsive Layouts'],
    image: '/photo5.jpg', // placeholder
  },
  {
    name: 'Product Management Job Simulation',
    issuer: 'Electronic Arts (via Forage)',
    issued: 'Oct 2023',
    credentialId: 'CFC7aH2ALc3uBFa2g',
    skills: ['Product Thinking', 'Agile', 'Digital Art'],
    image: '/photo6.jpg', // placeholder
  },
  {
    name: 'Digital Arts Certification',
    issuer: '',
    issued: 'Oct 2023',
    skills: ['Digital Illustration', 'Graphic Design', 'Animation'],
    image: '/photo7.jpg', // placeholder
  },
  {
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    issued: 'Oct 2023',
    credentialId: '220053626',
    skills: ['SEO', 'Social Media Marketing', 'Content Strategy'],
    image: '/photo8.jpg', // placeholder
  },
];

// --- EXPERIENCE ---
export const experience = [
  {
    year: 'Aug 2024 – Present',
    title: 'Vice President – Pioneers Club',
    company: 'Lovely Professional University, Jalandhar',
    location: 'On-Site',
    description: 'Led non-technical club activities such as singing, dancing, poetry, podcasting, and sports. Focused on creativity, innovation, and leadership development among students.',
  },
];

// --- PROJECTS ---
export const projects = [
  {
    slug: 'cultural-etiquette-guide',
    title: 'Cultural Etiquette Guide',
    description: 'A web app offering AI-powered etiquette guides and cultural landmark maps for travelers.',
    tags: ['AI', 'Google Maps', 'React'],
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-01-01',
    details: {
        longDescription: 'A web app offering AI-powered etiquette guides and cultural landmark maps for travelers.',
        challenge: '',
        solution: '',
        features: [
            'AI-generated etiquette summaries (short/detailed)',
            'Google Maps integration',
            'Dark mode support',
            'Responsive design',
            'Ripple animation on buttons'
        ],
        images: [],
        testimonials: []
    }
  },
  {
    slug: 'nexus-notes',
    title: 'Nexus Notes – Personal Note Keeper',
    description: 'A modern web-based note management system with tagging, search, and minimalist UI.',
    tags: ['MERN'],
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-01-01',
    details: {
        longDescription: 'A modern web-based note management system with tagging, search, and minimalist UI.',
        challenge: '',
        solution: '',
        features: ['CRUD notes', 'user sessions', 'responsive design'],
        images: [],
        testimonials: []
    }
  },
  {
    slug: 'secure-syscall-interface',
    title: 'Secure Syscall Interface',
    description: 'A secure, interactive system call simulator.',
    tags: ['Python', 'SQLite', 'HTML/CSS/JS'],
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-01-01',
    details: {
        longDescription: 'A secure, interactive system call simulator.',
        challenge: '',
        solution: '',
        features: [
            'User authentication (login/register with roles)',
            'File operations via syscall emulation (read, write, open, close)',
            'Dynamic syscall selection and logging',
            'Role-based access'
        ],
        images: [],
        testimonials: []
    }
  },
  {
    slug: 'food-delivery-website',
    title: 'Food Delivery Website',
    description: 'A user-friendly food delivery platform with login, menu display, cart system, and order processing.',
    tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'Express', 'Node.js', 'React'],
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-01-01',
    details: {
        longDescription: 'A user-friendly food delivery platform with login, menu display, cart system, and order processing.',
        challenge: '',
        solution: '',
        features: [],
        images: [],
        testimonials: []
    }
  },
];

// --- SERVICES ---
export const services = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable and performant web applications with the MERN stack (MongoDB, Express.js, React, Node.js). From single-page applications to complex enterprise solutions.',
    icon: Code,
  },
  {
    title: 'AI Integration',
    description: 'Integrating cutting-edge AI features into your applications. Leveraging models for personalized user experiences, content generation, and intelligent automation.',
    icon: Bot,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on cloud platforms like Vercel, Netlify, and Firebase. Setting up CI/CD pipelines for automated, reliable deployments.',
    icon: Cloud,
  },
];

// --- BLOG POSTS ---
export const blogPosts = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks in 2024',
    excerpt: 'A deep dive into advanced patterns and best practices for using React Hooks effectively.',
    date: '2024-05-15',
    content: `
## Introduction to React Hooks

React Hooks, introduced in React 16.8, revolutionized how we write components. They let you use state and other React features without writing a class. In this post, we'll explore some advanced patterns.

## Custom Hooks for Reusability

One of the most powerful features of Hooks is the ability to create your own. Let's create a hook to fetch data.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Optimizing with useMemo and useCallback

To prevent unnecessary re-renders, we can use \`useMemo\` and \`useCallback\`.

- \`useMemo\` memoizes a value.
- \`useCallback\` memoizes a function.

Here's an example:

\`\`\`jsx
import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ compute, onClick }) {
  const value = useMemo(() => compute(), [compute]);
  return <button onClick={onClick}>Value is {value}</button>;
}

function App() {
  const [count, setCount] = useState(0);
  
  const computeExpensiveValue = () => {
    // imagine this is a heavy computation
    return count * 2;
  };
  
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <ExpensiveComponent compute={computeExpensiveValue} onClick={handleClick} />
    </div>
  );
}
\`\`\`

## Conclusion

Hooks are a powerful tool in any React developer's arsenal. By understanding and applying these patterns, you can write cleaner, more efficient, and more maintainable code.
`,
  },
  {
    slug: 'getting-started-with-three-js',
    title: 'Getting Started with Three.js in React',
    excerpt: 'Learn how to integrate a stunning 3D graphics into your Next.js application using Three.js.',
    date: '2024-04-22',
    content: `
## Setting up the Scene

First, you need a scene, a camera, and a renderer.

\`\`\`javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
\`\`\`

## Adding a Cube

Let's add a simple cube to our scene.

\`\`\`javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
\`\`\`

## Animation Loop

To animate the cube, we need a render loop.

\`\`\`javascript
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}
animate();
\`\`\`

This is just the beginning. Three.js offers a vast API for creating complex 3D experiences on the web.
`,
  },
];
