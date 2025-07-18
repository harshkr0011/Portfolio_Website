'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const pointLight = new THREE.PointLight(0x00aaff, 1, 100);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // --- Particles ---
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // --- Floating Shapes ---
    const shapes = [];
    const shapeGeometry = new THREE.IcosahedronGeometry(0.2, 0);
    const shapeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        emissive: 0x00aaff,
        emissiveIntensity: 1,
        metalness: 0.5,
        roughness: 0.2,
    });

    for (let i = 0; i < 15; i++) {
        const shape = new THREE.Mesh(shapeGeometry, shapeMaterial);
        shape.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        const scale = Math.random() * 0.5 + 0.5;
        shape.scale.set(scale, scale, scale);
        scene.add(shape);
        shapes.push(shape);
    }


    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - currentMount.clientWidth / 2;
      mouseY = event.clientY - currentMount.clientHeight / 2;
    };

    currentMount.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      particles.rotation.y = -0.05 * elapsedTime;

      shapes.forEach(shape => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
      });

      if (mouseX !== 0) {
        camera.position.x += (mouseX * 0.00005 - camera.position.x) * .05;
        camera.position.y += (-mouseY * 0.00005 - camera.position.y) * .05;
      }
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-20 dark:opacity-100" />;
};

export default ThreeDBackground;
