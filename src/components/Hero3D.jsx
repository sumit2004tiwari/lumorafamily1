import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';

function AbstractShape() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#3D7A37" 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </mesh>
      <mesh ref={mesh} scale={1.8}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#C4936A" 
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <PresentationControls
          global={false} 
          cursor={false} 
          snap={true} 
          speed={1} 
          zoom={1} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <AbstractShape />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
