"use client"
import React, { useRef } from 'react'
import { Canvas ,useFrame,useLoader} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh } from 'three';
import { TextureLoader } from 'three'

const RotatingBox = () => {
  const mesh = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.3
    mesh.current.rotation.y += delta * 0.3
    mesh.current.rotation.z += delta * 0.3
  })
const texture_1 = useLoader(TextureLoader,"/assests/1.jpg")
const texture_2 = useLoader(TextureLoader,"/assests/2.jpg")
const texture_3 = useLoader(TextureLoader,"/assests/3.jpg")
const texture_4 = useLoader(TextureLoader,"/assests/4.jpg")
const texture_5 = useLoader(TextureLoader,"/assests/5.jpg")
const texture_6 = useLoader(TextureLoader,"/assests/6.jpg")
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[6, 6, 6]} />
      <meshStandardMaterial map={texture_1} attach={"material-0"} />
      <meshStandardMaterial map={texture_2} attach={"material-1"}/>
      <meshStandardMaterial map={texture_3} attach={"material-2"}/>
      <meshStandardMaterial map={texture_4} attach={"material-3"}/>
      <meshStandardMaterial map={texture_5} attach={"material-4"}/>
      <meshStandardMaterial map={texture_6} attach={"material-5"}/>
    </mesh>
  )
}


const HeroExperience = () => {
  return (
    <Canvas camera={{position:[0,0,15], fov:45}}>
        <OrbitControls enableZoom={false} enablePan={false} />
         <ambientLight intensity={2} />
         <directionalLight position={[2,1,1]}/>
      <RotatingBox />
    </Canvas>
  )
}

export default HeroExperience