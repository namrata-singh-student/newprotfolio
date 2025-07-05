import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const Developer3D = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const group = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  // Create a simple 3D scene with a developer figure and table
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} position={position} scale={scale} rotation={rotation}>
      {/* Table */}
      <mesh position={[0, -2, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Table Legs */}
      <mesh position={[-1.8, -3, -0.8]} castShadow>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[1.8, -3, -0.8]} castShadow>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[-1.8, -3, 0.8]} castShadow>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[1.8, -3, 0.8]} castShadow>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Computer Monitor */}
      <mesh position={[0, 0, -0.5]} castShadow>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, -0.8, -0.5]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color="#34495E" />
      </mesh>

      {/* Monitor Screen */}
      <mesh position={[0, 0, -0.45]}>
        <boxGeometry args={[1.8, 1, 0.01]} />
        <meshStandardMaterial color="#3498DB" emissive="#3498DB" emissiveIntensity={0.3} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -1.5, 0.3]} castShadow>
        <boxGeometry args={[2.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>

      {/* Mouse */}
      <mesh position={[1.2, -1.5, 0.3]} castShadow>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#34495E" />
      </mesh>

      {/* Coffee Cup */}
      <mesh position={[-1.5, -1, 0.3]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 8]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Developer Figure (Simplified) */}
      {/* Head */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.8, 1.5, 0.4]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, 0.5, 0]} castShadow>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[0.6, 0.5, 0]} castShadow>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Hands */}
      <mesh position={[-0.6, -0.1, 0]} castShadow>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[0.6, -0.1, 0]} castShadow>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Floating Code Particles */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            Math.random() * 4 + 2,
            (Math.random() - 0.5) * 4
          ]}
        >
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshStandardMaterial 
            color="#00FF00" 
            emissive="#00FF00" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Ambient Light for better visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#3498DB" />
    </group>
  );
};

export default Developer3D; 