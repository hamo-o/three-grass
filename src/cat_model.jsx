import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CatModel(props) {
  const { nodes, materials } = useGLTF('/models/low_poly_cat/model.glb')

  materials.lambert1.color.setColorName('white')

  return (
    <group {...props} dispose={null} scale={0.1} position={[0, -0.7, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.CatMesh2_lambert1_0.geometry} material={materials.lambert1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
