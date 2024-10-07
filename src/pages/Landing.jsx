import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import helloModel from './assets/hello.glb';

function Model({ url }) {
  const { scene } = useGLTF(helloModel); // Load the .glb model
  return <primitive object={scene} scale={2} />; // Render the model
}

function Landing() {
  return (
    <div className="fixed h-screen w-full bg-gradient-to-b from-[#5ee226] to-black"style={{ height: '100vh' }}>
     
      <h1 className='relative text-center mt-40  text-shadow-xl  opacity-50  text-[100px]  text-[	#b3b300] font-protest-strike'> Ben 10 Alien Force</h1>
     
      <Canvas className="absolute -top-40">
        {/* Load the 3D Model */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

export default Landing;