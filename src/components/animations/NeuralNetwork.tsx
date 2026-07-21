// ============================================================================
// NeuralNetwork — Three.js 3D hero animation
// Floating nodes, glowing connections, particle field
// ============================================================================

"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const NODE_COUNT = 24;
const PARTICLE_COUNT = 800;
const CONNECTION_DISTANCE = 3.5;
const COLORS = {
  primary: new THREE.Color("#2563EB"),
  accent: new THREE.Color("#6366F1"),
  glow: new THREE.Color("#3b82f6"),
  particle: new THREE.Color("#94A3B8"),
};

// ---------------------------------------------------------------------------
// Node Mesh — Floating glowing spheres
// ---------------------------------------------------------------------------
function Nodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
      );
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    return positions.map(() =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.002
      )
    );
  }, [positions]);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i].add(velocities[i]);

      // Bounce within bounds
      if (Math.abs(positions[i].x) > 5.5) velocities[i].x *= -1;
      if (Math.abs(positions[i].y) > 4.5) velocities[i].y *= -1;
      if (Math.abs(positions[i].z) > 3.5) velocities[i].z *= -1;

      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(0.06 + Math.sin(Date.now() * 0.001 + i) * 0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={COLORS.primary} transparent opacity={0.9} />
    </instancedMesh>
  );
}

// ---------------------------------------------------------------------------
// Connections — Lines between close nodes
// ---------------------------------------------------------------------------
function Connections() {
  const lineRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
      );
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    return positions.map(() =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.002
      )
    );
  }, [positions]);

  useFrame(() => {
    if (!lineRef.current) return;

    // Update positions
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i].add(velocities[i]);
      if (Math.abs(positions[i].x) > 5.5) velocities[i].x *= -1;
      if (Math.abs(positions[i].y) > 4.5) velocities[i].y *= -1;
      if (Math.abs(positions[i].z) > 3.5) velocities[i].z *= -1;
    }

    // Build connections
    const linePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < CONNECTION_DISTANCE) {
          linePositions.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }

    const geometry = lineRef.current.geometry;
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color={COLORS.primary}
        transparent
        opacity={0.15}
        linewidth={1}
      />
    </lineSegments>
  );
}

// ---------------------------------------------------------------------------
// Particle Field — Floating background particles
// ---------------------------------------------------------------------------
function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 20;
      arr[i + 1] = (Math.random() - 0.5) * 16;
      arr[i + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t;
    pointsRef.current.rotation.x = t * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={COLORS.particle}
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// ---------------------------------------------------------------------------
// Scene
// ---------------------------------------------------------------------------
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color={COLORS.glow} />
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Nodes />
      </Float>
      <Connections />
      <Particles />
    </>
  );
}

// ---------------------------------------------------------------------------
// Fallback — CSS gradient for low-end devices
// ---------------------------------------------------------------------------
function Fallback() {
  return (
    <div className="absolute inset-0 animated-gradient opacity-50" />
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export function NeuralNetwork({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className || ""}`}>
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      {/* Overlay gradient to blend edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/0 via-background/0 to-background" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/0 via-background/0 to-background/50" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/40 via-transparent to-background/40" />
    </div>
  );
}
