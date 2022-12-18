import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function GooseModel(props) {
  const { nodes, materials } = useGLTF('/models/goose.glb')
  return (
    <group {...props} dispose={null} scale={0.2} position={[0, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.lambert2SG} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/goose.glb')
