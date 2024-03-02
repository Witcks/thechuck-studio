import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
const TorusKnot = ({ position, args }) => {
  const ref = useRef();

  const { color, radius } = useControls({
    // color: '#ffffff',
    // radius: {
    //   value: 1,
    //   min: 1,
    //   max: 10,
    //   step: 0.5,
    // },
  });

  return (
    <mesh
      position={position}
      ref={ref}>
      <torusKnotGeometry args={[radius, ...args]} />
      {/* <meshStandardMaterial color={color} />  */}
      <MeshWobbleMaterial
        factor={3}
        color={color}
      />
    </mesh>
  );
};
const Scene = () => {
  const directionalLightRef = useRef();
  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={1.8}
        ref={directionalLightRef}
        color={'#ffffff'}
      />
      <ambientLight intensity={0.5} />
      <TorusKnot
        args={[0.15, 1000, 50, 4]}
        position={[0, 0, 0]}
      />
      <OrbitControls enableZoom={false} />
    </>
  );
};
const ThreeD = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default ThreeD;
