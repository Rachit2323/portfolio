import React, { Suspense, useState, useEffect } from "react";
import { Canvas ,useThree} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { x, gmail, githublogo, linkedin } from "../../assets";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const { size } = useThree(); 
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [angle, setAngle] = useState(0);

  
  const orbitRadius = 230; 
  const images = [x, gmail, githublogo, linkedin];
  const urls = ["#", "mailto:atreyrachit23@gmail.com", "https://github.com/Rachit2323", "https://www.linkedin.com/in/rachit-sharma-212931183/"];


  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(angle => angle + 0.01); 
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const calculatePosition = (index) => {
    const step = (2 * Math.PI) / images.length;
    const x = Math.cos(angle + index * step) * orbitRadius;
    const y = Math.sin(angle + index * step) * orbitRadius;
    return { x, y };
  };

  return (
    <>
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
      {images.map((image, index) => (
         <a key={index} href={urls[index]} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: '30px',
              height: '30px',
              borderRadius: '50%', // Make it round
              transform: `translate(-50%, -50%) translate(${calculatePosition(index).x}px, ${calculatePosition(index).y}px)`, // Translate position
            }}
          />
        </a>
      ))}
    </>
  );
};

export default EarthCanvas;
