import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  AccumulativeShadows,
  Environment,
  Html,
  OrbitControls,
  RandomizedLight,
  useFBX,
  useProgress,
} from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
/* import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader'; */

function KeyLight({ brightness, color }: { brightness: number; color: string }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      //lookAt={[0, 0, 0]}
      //penumbra={1}
      castShadow
    />
  );
}

function Scene() {
  const path = require('../Diamond.fbx');
  const fbx = useFBX(path);
  return <primitive object={fbx} scale={0.8} />;

  /* const dm = useLoader(Rhino3dmLoader, '/models/Diamond.3dm');
  return <primitive object={dm} scale={0.0005} />; */
}

function Loader() {
  const { progress, errors, loaded, active, item, total } = useProgress();
  return (
    <Html center>
      {progress} % loaded ({loaded} out of {total})
    </Html>
  );
}

const Rendering = () => {
  return (
    <Canvas
      camera={{ position: [-10, 10, 15], fov: 50 }}
      shadows
      gl={{ antialias: false }}
      /* camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }} */ style={{
        height: 400,
        width: 400,
        borderRadius: 16,
      }}
    >
      {/* <ambientLight intensity={1} /> */}
      <pointLight position={[20, 20, 10]} color={0xffffff} intensity={20} />
      {/* <KeyLight brightness={5.6} color={'#ffc9f9'} /> */}
      <Suspense fallback={<Loader />}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -Math.PI / 2, 0]}>
          <Scene />
        </group>
        {/* Soft shadows, they stop rendering after 1500 frames */}
        {/* <AccumulativeShadows
          temporal
          frames={Infinity}
          alphaTest={1}
          blend={200}
          limit={1500}
          scale={25}
          position={[0, -0.05, 0]}
        >
          <RandomizedLight
            amount={1}
            mapSize={512}
            radius={5}
            ambient={0.5}
            position={[-10, 10, 5]}
            size={10}
            bias={0.001}
          />
        </AccumulativeShadows> */}
        {/* Effects */}
        <EffectComposer>
          <DepthOfField target={[0, 0, 3]} /* focusRange={0.15} */ bokehScale={8} />
        </EffectComposer>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          enableZoom={true}
          /* minPolarAngle={Math.PI / 6} */
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="park" background />
      </Suspense>
    </Canvas>
  );
};

export default Rendering;
