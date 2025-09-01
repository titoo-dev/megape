'use client';

import { useRef, forwardRef, useImperativeHandle, useEffect, useMemo } from 'react';
import * as THREE from 'three';
// use regular BoxGeometry instead of RoundedBox for simpler mesh
import { useLoader } from '@react-three/fiber'

interface LetterM3DProps {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
  onReady?: () => void;
  imageUrl?: string;
}

const LetterM3D = forwardRef<THREE.Group, LetterM3DProps>(({
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  scale = 1,
  onReady,
  imageUrl = '/images/agape_m.jpg'
}, ref) => {
  const groupRef = useRef<THREE.Group>(null);

  // load texture via useLoader (per request)
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useImperativeHandle(ref, () => groupRef.current!, []);

  useEffect(() => {
    if (groupRef.current && onReady) onReady();
  }, [onReady]);

  // configure texture and compute aspect to size the 3D mesh to the image
  const { material, boxArgs } = useMemo(() => {
    // defensive image access
    const img = texture?.image as
      | { width?: number; height?: number }
      | HTMLImageElement
      | HTMLCanvasElement
      | undefined;

  // texture settings: do NOT repeat — show a single copy of the image
  // centered on the geometry. Use ClampToEdgeWrapping so the UVs outside
  // [0,1] are clamped and the texture won't tile.
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.flipY = true;
  texture.generateMipmaps = true;

  // Ensure a single copy of the image is used
  texture.repeat.set(1, 1);

  // Compute offset to center the image on the geometry. If the geometry's
  // aspect differs from the texture, the material UVs will show letterbox.
  // Offsetting by 0.5 centers the texture in UV space.
  texture.offset.set(0, 0);

  // Keep the center at default (0.5,0.5) so rotations/pivots are intuitive
  texture.center.set(0.5, 0.5);
  texture.rotation = 0;

    // compute aspect to preserve image proportions
    const aspect = img && img.width && img.height ? img.width / img.height : 1;
    const maxDim = 3.5; // target max size for the bigger side
    let width: number;
    let height: number;
    if (aspect >= 1) {
      // landscape or square
      width = maxDim;
      height = Math.max(0.001, maxDim / aspect);
    } else {
      // portrait
      height = maxDim;
      width = Math.max(0.001, maxDim * aspect);
    }
    const depth = 0.12;

    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      opacity: 0.98,
      side: THREE.DoubleSide,
      metalness: 0.05,
      roughness: 0.7,
    });

    return {
      material: mat,
      boxArgs: [width, height, depth] as [number, number, number],
    };
  }, [texture]);

  return (
    <group ref={groupRef} rotation={rotation} position={position} scale={scale}>
      {/* center the box and orient front to camera-friendly side */}
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={boxArgs} />
        {/* apply the material with the loaded texture */}
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
});

LetterM3D.displayName = 'LetterM3D';

export default LetterM3D;
