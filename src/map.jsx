import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Map(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/models/map.glb')

  return (
    <group {...props} dispose={null} position={[0, 0, 0]} rotation={[-Math.PI / 1.2, 0, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Curve.geometry} material={materials.SVGMat} scale={[101.1, 1311.78, 101.1]} />
    </group>
  )
}

useGLTF.preload('/map.glb')
