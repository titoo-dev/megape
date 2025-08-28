'use client';
import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

interface LetterM3DProps {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
  onReady?: () => void;
}

const LetterM3D = forwardRef<THREE.Group, LetterM3DProps>(({ 
  rotation = [0, 0, 0], 
  position = [0, 0, 0],
  scale = 1,
  onReady
}, ref) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Properly expose the group ref to parent component
  useImperativeHandle(ref, () => groupRef.current!, []);
  
  // Call onReady when component is mounted and ref is available
  useEffect(() => {
    if (groupRef.current && onReady) {
      onReady();
    }
  }, [onReady]);

  return (
    <group ref={groupRef} rotation={rotation} position={position} scale={scale}>
      {/* Main letter M */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
        position={[-1, -1, 0]}
      >
        M
        <meshStandardMaterial
          color="#fe1556"
          metalness={0.8}
          roughness={0.2}
          emissive="#fe1556"
          emissiveIntensity={0.05}
        />
      </Text3D>
      
      {/* Accent geometry - subtle glowing edges */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2.05}
        height={0.1}
        curveSegments={12}
        position={[-1.025, -1.025, -0.25]}
      >
        M
        <meshStandardMaterial
          color="#32a3ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#32a3ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </Text3D>
    </group>
  );
});

LetterM3D.displayName = 'LetterM3D';

export default LetterM3D;
