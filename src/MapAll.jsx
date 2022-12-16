import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MapAll(props) {
  const { nodes, materials } = useGLTF('/models/map-all.glb')

  const onClickChangeColor = (material, color) => {
    material.color.setHex(color)
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.003']}
        position={[-30.02, -0.33, 28.63]}
        rotation={[0.35, 0.03, -0.49]}
        scale={74.05}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.003'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.003'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.003'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['SVGMat.004']}
        position={[-27.17, -0.34, 29.67]}
        rotation={[0.49, 0.28, -0.46]}
        scale={93.72}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.004'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.004'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.004'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['SVGMat.005']}
        position={[-16.59, -0.33, 24.88]}
        rotation={[0.57, 0.43, -0.53]}
        scale={94.82}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.005'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.005'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.005'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['SVGMat.006']}
        position={[-5.29, -0.33, 15.66]}
        rotation={[0.05, 0.58, -0.07]}
        scale={77.69}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.006'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.006'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.006'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials['SVGMat.007']}
        position={[-1.14, -0.33, 16.61]}
        rotation={[0.62, 0.41, -0.65]}
        scale={92.35}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.007'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.007'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.007'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials['SVGMat.008']}
        position={[3.21, -0.33, 12.89]}
        rotation={[0.69, 0.38, -0.75]}
        scale={95.16}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.008'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.008'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.008'], 0xfffffff)
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials['SVGMat.009']}
        position={[-1.83, -0.33, -4.57]}
        scale={87.89}
        onPointerOver={() => {
          onClickChangeColor(materials['SVGMat.009'], 0x00ff5a5a)
        }}
        onPointerOut={() => {
          onClickChangeColor(materials['SVGMat.009'], 0xfffffff)
        }}
        onClick={() => {
          onClickChangeColor(materials['SVGMat.009'], 0xfffffff)
        }}
      />
    </group>
  )
}

useGLTF.preload('/map-all.glb')
