'use client';
import { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LetterM3D from './LetterM3D';
import ParticleField from './ParticleField';
import * as THREE from 'three';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExplainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const letterMRef = useRef<THREE.Group>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [letterReady, setLetterReady] = useState(false);

  // Wait for canvas to be ready before setting up animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCanvasReady(true);
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!sectionRef.current || !letterMRef.current || !isCanvasReady || !letterReady) return;

    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      return;
    }

    if (typeof window === 'undefined' || !ScrollTrigger) return;

    if (!letterMRef.current.rotation || !letterMRef.current.scale || !letterMRef.current.position) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400vh",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Simple Y-axis rotation animation
    tl.to(letterMRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    return () => {
      tl.kill();
    };

  }, { scope: sectionRef, dependencies: [isCanvasReady, letterReady] });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative h-full flex items-center justify-center">
        <div ref={canvasRef} className="w-full h-full">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              
              <ambientLight intensity={0.2} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={1}
                color="#ffffff"
              />
              <pointLight 
                position={[-10, -10, -5]} 
                intensity={0.5}
                color="#32a3ff"
              />
              <pointLight 
                position={[10, -10, 5]} 
                intensity={0.3}
                color="#fe1556"
              />
              
              <ParticleField count={50} />
              
              <LetterM3D 
                ref={letterMRef}
                position={[0, 0, 0]}
                scale={1}
                onReady={() => setLetterReady(true)}
              />
              
              <mesh visible={false} onUpdate={() => !isCanvasReady && setIsCanvasReady(true)}>
                <boxGeometry args={[0.1, 0.1, 0.1]} />
              </mesh>
              
              <Environment preset="night" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
