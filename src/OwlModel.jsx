import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OwlModel(props) {
  const { nodes, materials } = useGLTF('/models/owl.glb')
  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.ScreechOwl_mat} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/owl.glb')
