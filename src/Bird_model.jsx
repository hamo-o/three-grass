import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BirdModel(props) {
  const { nodes, materials } = useGLTF('/models/bird.glb')

  materials.kayu.color.setColorName('black')

  return (
    <group {...props} dispose={null} position={[0, -2, 0]} rotation={[0, Math.PI / 2, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[81.17, 50.63, 18.29]} rotation={[0, 0, Math.PI / 2]}>
            <mesh castShadow receiveShadow geometry={nodes.Circle_kayu_0.geometry} material={materials.kayu} />
          </group>
          <group position={[0, 515.86, -250.15]}>
            <mesh castShadow receiveShadow geometry={nodes.Plane001_Body_0.geometry} material={materials.Body} />
            <mesh castShadow receiveShadow geometry={nodes.Plane001_Body_1_0.geometry} material={materials.Body_1} />
            <mesh castShadow receiveShadow geometry={nodes.Plane001_kaki_0.geometry} material={materials.kaki} />
            <mesh castShadow receiveShadow geometry={nodes.Plane001_paruh_0.geometry} material={materials.paruh} />
          </group>
          <group position={[0, 525.56, -233.98]}>
            <mesh castShadow receiveShadow geometry={nodes.Plane002_Body_0.geometry} material={materials.Body} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bird.glb')
