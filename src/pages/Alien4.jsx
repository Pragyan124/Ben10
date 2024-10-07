import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import alien4Model from '../assets/alien4.glb';



function Model() {
  const { scene } = useGLTF(alien4Model); // Load the .glb model
  return <primitive object={scene} scale={0.5} />; // Render the model
}

function Alien4() {
  return (
    <div className="fixed h-screen w-full bg-gradient-to-b from-black via-[#0047b3] to-black"style={{ height: '100vh' }}>
      <div className="flex-grow" />
      <h1 className='relative text-center mt-40 mb-20 text-shadow-xl  opacity-50   sm:text-[30px] md:text-[50px] lg:text-[100px] text-[#00b3b3] font-protest-strike'>BIG CHILL</h1>

      
     
      <Canvas className="border-none -top-10">
        {/* Load the 3D Model */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

export default Alien4;