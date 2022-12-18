import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function FishModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/fish.glb')
  const { actions } = useAnimations(animations, group)

  materials.M_Fish.color.setColorName('white')

  return (
    <group ref={group} {...props} dispose={null} scale={10} rotation={[0, -Math.PI / 2, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="88c6adbdf2db45debc80dc1410d3ebb4fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Fish" />
                <group name="Fish_Rigged" rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.M_Fish} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.M_FishEye} skeleton={nodes.Object_10.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fish.glb')
