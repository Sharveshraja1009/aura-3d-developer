
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingObject = ({ position, icon }: { position: [number, number, number], icon: string }) => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="#00FFFF" 
          emissive="#00FFFF" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const ThreeJSScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B026FF" />
      
      <FloatingObject position={[-2, 1, 0]} icon="react" />
      <FloatingObject position={[2, -1, 0]} icon="js" />
      <FloatingObject position={[0, 2, -1]} icon="node" />
      <FloatingObject position={[-1, -2, 1]} icon="three" />
      <FloatingObject position={[1.5, 0.5, -0.5]} icon="web" />
    </Canvas>
  );
};

const FloatingIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-96"
    >
      <ThreeJSScene />
    </motion.div>
  );
};

export default FloatingIcon;
