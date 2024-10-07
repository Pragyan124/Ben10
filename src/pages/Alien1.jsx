import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model({ url }) {
  const { scene } = useGLTF(url); // Load the .glb model
  return <primitive object={scene} scale={0.7} />; // Render the model
}

function Alien1 () {
  return (
    <div className="fixed h-screen w-full  bg-gradient-to-b from-black to-black"style={{ height: '100vh' }}>
      <div className="flex-grow" />
      <h1 className='relative text-center mt-40 mb-20 text-shadow-xl  opacity-50  sm:text-[30px] md:text-[50px] lg:text-[100px]  text-[#8bacaf] font-protest-strike'>XLR8</h1>


     
      <Canvas className="bg-gradient-to-b from-[#313030 ] to-[#69625d] bg-black -top-10">
        {/* Load the 3D Model */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Model url="src/assets/alien1.glb" />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

export default Alien1;