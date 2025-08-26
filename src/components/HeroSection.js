import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mountRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 150;
      positions[i + 1] = (Math.random() - 0.5) * 150;
      positions[i + 2] = (Math.random() - 0.5) * 150;
      colors[i] = 1;
      colors[i + 1] = Math.random() * 0.5 + 0.5;
      colors[i + 2] = Math.random() * 0.5 + 0.5;
      sizes[i / 3] = Math.random() * 0.3 + 0.1;
      opacities[i / 3] = Math.random() * 0.5 + 0.5;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    particlesGeometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 50;

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particleSystem.rotation.y = elapsedTime * 0.05;
      const positionsArray = particlesGeometry.attributes.position.array;
      const opacitiesArray = particlesGeometry.attributes.opacity.array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        positionsArray[i + 2] -= 0.05;
        if (positionsArray[i + 2] < -75) {
          positionsArray[i + 2] = 75;
          positionsArray[i] = (Math.random() - 0.5) * 150;
          positionsArray[i + 1] = (Math.random() - 0.5) * 150;
        }
        opacitiesArray[i / 3] = 0.5 + 0.5 * Math.sin(elapsedTime * 2 + i);
      }

      camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.opacity.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Text waving animation
  const text = "Unleashing Infinite Possibilities...";
  const letters = text.split("");

  const letterVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -1, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="w-full relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      {/* Center-bottom social media icons */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        <a href="https://www.facebook.com/arluminexa/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-125 hover:opacity-80 transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/_luminexa" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-125 hover:opacity-80 transition-all duration-300" />
        </a>
        <a href="https://x.com/_luminexa" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-125 hover:opacity-80 transition-all duration-300" />
        </a>
        <a href="https://www.linkedin.com/company/luminexa-technologies" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-125 hover:opacity-80 transition-all duration-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-125 hover:opacity-80 transition-all duration-300" />
        </a>
      </div>
      {/* Company info and emails below social icons */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-center  text-gray-400 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] tracking-wide">
        <p>Luminexa Technologies Private Limited | CIN: U62099KA2025PTC204174</p>
        <p>
          <a href="mailto:info@luminexa.in" className="hover:text-gray-300 transition-colors duration-300">info@luminexa.in</a> | 
          <a href="mailto:Career@luminexa.in" className="hover:text-gray-300 transition-colors duration-300"> Career@luminexa.in</a>
        </p>
      </div>
      <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold flex items-center justify-center"
     
          >
            <img
              src="/logo.png"
              alt="luminexa"
              className="h-6 sm:h-9 w-auto"
            />
          </motion.h1>
          <p className="text-[9px] sm:text-[9px] md:text-[9px] lg:text-[12px] mt-4 text-white tracking-wide flex justify-center">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;