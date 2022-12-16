import * as THREE from 'three'
import React, { Suspense, useRef, forwardRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Stars } from '@react-three/drei'
import { Grass } from './Grass'
import { Butterfly } from './Butterfly'
import { Particles } from './Particles'
import AnimatedCursor from 'react-animated-cursor'

import MapAll from './MapAll'

const random = Array.from({ length: 15 }, () => ({
  position: [THREE.MathUtils.randFloat(0.5, 0.7), THREE.MathUtils.randFloat(0.5, 0.7), THREE.MathUtils.randFloat(0.5, 0.7)],
  scale: THREE.MathUtils.randFloat(0.5, 1)
}))

export const App = () => {
  const navigate = useNavigate()
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)
  let num = getRandom(1, 7)

  const myClick = () => {
    navigate(`/detail/${num}`, { replace: true })
  }

  const [fogColor, setFogColor] = useState('white')
  return (
    <>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff'
        }}
      />
      <div className="title">WELCOME TO THE DMZ</div>
      <Canvas dpr={1.5} camera={{ position: [0, 0, 50], far: 1e5 }}>
        {/* <fog attach="fog" args={[fogColor, 10, 70]} /> */}
        <Suspense fallback={null}>
          <MapAll onClick={myClick} />
          {/* <Grass>
            <mesh
              onClick={myClick}>
              <torusKnotGeometry></torusKnotGeometry>
              <meshBasicMaterial color="#0b2b00" />
            </mesh>
          </Grass> */}
          {/* {random.map((e, i) => (
            <Butterfly key={i} {...e} />
          ))} */}
          <Clouds />
          <Environment preset="sunset" />
          <OrbitControls makeDefault minDistance={3} maxDistance={100} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
          <Stars />
        </Suspense>
      </Canvas>
    </>
  )
}

function Clouds() {
  return (
    <group>
      <Cloud depthTest={false} position={[-10, -6, -10]} speed={0.2} opacity={0.4} />
      <Cloud depthTest={false} position={[10, 6, -15]} speed={0.2} opacity={0.25} />
      <Cloud depthTest={false} position={[30, 10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[30, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[-10, -6, 15]} speed={0.2} opacity={0.3} />
      <Cloud depthTest={false} position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  )
}
