import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function GoatModel(props) {
  const { nodes, materials } = useGLTF('/models/goat.glb')
  return (
    <group {...props} dispose={null} position={[0, -2, 0]} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-5.71, 7.15, 32.99]} rotation={[-Math.PI, 0, 1.58]} scale={-1}>
          <group position={[-9.74, 0.12, -32.99]} rotation={[0, 0, -1.58]}>
            <group position={[3.06, -8.49, 40.84]} rotation={[Math.PI, 0, -0.01]} scale={-0.75}>
              <mesh castShadow receiveShadow geometry={nodes.Material2002.geometry} material={materials.material_2} />
            </group>
          </group>
        </group>
        <group position={[-5.71, 7.15, 32.99]} rotation={[0, 0, 1.58]}>
          <group position={[-9.74, 0.12, -32.99]} rotation={[0, 0, -1.58]}>
            <group position={[3.06, -8.49, 40.84]} rotation={[-Math.PI, 0, -0.01]} scale={-0.75}>
              <mesh castShadow receiveShadow geometry={nodes.Material2005.geometry} material={materials.material_2} />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Material2003.geometry} material={materials.material} />
          </group>
        </group>
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[-50.34, -28.67, 52.84]} rotation={[0.97, -0.78, -0.45]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
        <group position={[0, 0, 1]} />
      </group>
      <group position={[-11.35, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={-1}>
        <group position={[-5.71, 7.15, 32.99]} rotation={[0, 0, 1.58]}>
          <group position={[-9.74, 0.12, -32.99]} rotation={[0, 0, -1.58]}>
            <mesh castShadow receiveShadow geometry={nodes.Material2006.geometry} material={materials['material.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/goat.glb')
