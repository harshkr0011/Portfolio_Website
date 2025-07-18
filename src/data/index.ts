import { Code, Bot, Cloud } from 'lucide-react';

// --- SKILLS ---
export const skills = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Git', icon: 'git' },
  { name: 'C++', icon: 'cpp' },
  { name: 'C', icon: 'c' },
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'PHP', icon: 'php' },
];

// --- EXPERIENCE ---
export const experience = [
  {
    year: '2022 - Present',
    title: 'Full Stack Developer',
    company: 'Freelance & Personal Projects',
    description: 'Building and deploying MERN stack applications, focusing on creating seamless user experiences and robust, scalable solutions. Continuously learning and applying new technologies.',
  },
  {
    year: '2021 - 2022',
    title: 'Web Development Intern',
    company: 'Creative Tech Firm',
    description: 'Assisted the development team in building responsive websites using HTML, CSS, and JavaScript. Gained hands-on experience with React and backend integration.',
  },
  {
    year: '2021 - Present',
    title: 'B.Tech CSE Student',
    company: 'Lovely Professional University',
    description: 'Focusing on core computer science concepts including Data Structures, Algorithms, and OOP. Actively participating in coding challenges and hackathons.',
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

// --- PROJECTS ---
export const projects = [
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A feature-rich e-commerce platform with a modern UI.',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-06-15',
    details: {
      longDescription: 'This project is a full-featured e-commerce platform built with Next.js. It includes product browsing, a shopping cart, a secure checkout process with Stripe integration, and a user dashboard for managing orders.',
      challenge: 'The primary challenge was to create a high-performance, secure, and user-friendly online store that could handle a large inventory and process payments reliably using Stripe.',
      solution: 'I built the application using Next.js for server-side rendering to ensure fast page loads and optimal SEO. Stripe was integrated for secure payment processing. The UI was designed to be intuitive and fully responsive.',
      features: ['Product filtering and search', 'Shopping cart management', 'Stripe payment integration', 'User authentication'],
      images: [
        'https://placehold.co/1200x800.png',
        'https://placehold.co/1200x800.png',
        'https://placehold.co/1200x800.png',
      ],
      dataAiHints: ['e-commerce website', 'product page', 'shopping cart'],
      testimonials: [
        {
          quote: "Working on this was a fantastic experience. The code quality is top-notch.",
          name: "Jane Doe",
          title: "Project Manager"
        }
      ]
    }
  },
  {
    slug: 'project-management-tool',
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage projects and tasks.',
    tags: ['React', 'Firebase', 'Framer Motion'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard tasks',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-03-20',
    details: {
      longDescription: 'This is a real-time, collaborative project management tool inspired by Trello and Asana. It uses Firebase for backend services and features drag-and-drop functionality for task management.',
      challenge: 'The main goal was to enable real-time collaboration between team members. Implementing a seamless drag-and-drop interface for task management across different users was a key technical hurdle.',
      solution: 'Firebase Firestore was used for real-time data synchronization, ensuring all users see updates instantly. The frontend was built with React and Framer Motion to create a smooth, intuitive drag-and-drop experience.',
      features: ['Real-time collaboration', 'Drag-and-drop kanban board', 'Task assignments and deadlines', 'Team management'],
      images: [
        'https://placehold.co/1200x800.png',
        'https://placehold.co/1200x800.png',
      ],
      dataAiHints: ['kanban board', 'project management'],
       testimonials: []
    }
  },
  {
    slug: 'ai-blogging-platform',
    title: 'AI Blogging Platform',
    description: 'A blog that uses AI to help writers generate content.',
    tags: ['Next.js', 'GenAI', 'GraphQL'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'writing robot',
    liveUrl: '#',
    repoUrl: '#',
    date: '2024-05-10',
     details: {
      longDescription: 'This platform empowers writers by integrating a generative AI to assist with brainstorming, drafting, and refining blog posts. It connects to a headless CMS via GraphQL.',
      challenge: 'Integrating a generative AI smoothly into the user\'s writing workflow was the biggest challenge. The AI needed to provide helpful suggestions without being intrusive.',
      solution: 'I used Genkit to connect to the Gemini API, providing writers with contextual AI assistance. The platform was built with a clean, minimalist interface to keep the focus on writing, with AI tools available on demand.',
      features: ['AI-powered content generation', 'Markdown editor', 'User authentication', 'GraphQL API integration'],
      images: [
        'https://placehold.co/1200x800.png',
      ],
      dataAiHints: ['AI writing'],
      testimonials: [
        {
          quote: "The AI features are incredibly innovative and well-implemented.",
          name: "John Smith",
          title: "Tech Blogger"
        }
      ]
    }
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
    excerpt: 'Learn how to integrate stunning 3D graphics into your Next.js application using Three.js.',
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
