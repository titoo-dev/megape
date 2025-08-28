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
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [letterReady, setLetterReady] = useState(false);

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
    if (!sectionRef.current || !letterMRef.current || !isCanvasReady || !letterReady || !textContainerRef.current) return;

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

    // Animation simple de la lettre M (rotation Y seulement)
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

    // Animations des textes d'explication
    tl.to('.explanation-text', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, 0.3)
    .to('.explanation-text', {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.in"
    }, 0.8);

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
      
      {/* Canvas 3D */}
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

      {/* Textes d'explication en bas */}
      <div 
        ref={textContainerRef}
        className="absolute bottom-20 left-0 right-0 text-center text-white pointer-events-none"
      >
        <div className="explanation-text opacity-0 max-w-4xl mx-auto px-4" style={{ transform: 'translateY(10px)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-400">M</span>ission + <span className="text-red-500">Agape</span> = <span className="text-white">MAGAPE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            L'amour inconditionnel de Dieu qui nous unit en une seule famille
          </p>
        </div>
      </div>
    </section>
  );
}
