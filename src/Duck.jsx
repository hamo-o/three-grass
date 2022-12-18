import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Duck(props) {
  const { nodes, materials } = useGLTF('/models/duck.glb')

  return (
    <group {...props} dispose={null} position={[0, -4, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <group position={[748.11, 534.37, 650.76]} rotation={[Math.PI, 0.76, 2.68]} scale={100} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.Material_101}
        position={[0.68, -0.52, 1.17]}
        rotation={[-0.15, 0, 0]}
        scale={[0.28, 0.28, 0.35]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.Material_50} position={[0.68, -0.52, 0.06]} scale={0.28} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.Material_25}
        position={[0.68, -3.53, -3.29]}
        rotation={[0.3, 0, 0]}
        scale={[0.31, 0.32, 0.37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.Material_37}
        position={[0.38, -2.63, 1.03]}
        scale={[0.25, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.Standardmaterial} position={[0.68, -0.52, 0.06]} scale={0.28} />
    </group>
  )
}

useGLTF.preload('/duck.glb')
