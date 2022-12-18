import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Shadow } from '@react-three/drei'
import { Particles } from './Particles'

import AnimatedCursor from 'react-animated-cursor'

import Duck from './Duck'

const ChineseMerganser = () => {
  const navigate = useNavigate()
  const myClick = () => {
    navigate('/', { replace: true })
  }

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

      <div className="subtitle" onClick={myClick}>
        Chinese merganser
      </div>
      <div className="content">
        <div className="text ">
          <br />
          우리나라 말 중에서 호사스럽다는 말이 있지요? ‘호화롭게 사치하다.’ 라는 뜻인데요, 재미있게도 오리 중에서 아름다운 외모 때문에 그렇게 불리는 녀석이
          있습니다. 바로 호사비오리입니다. 오리과의 비오리들 중 한 종류인 이 새는 전 세계 적으로 희귀한 멸종위기종으로 외모가 근사한 것으로 유명합니다. 가장
          먼저 옆구리 쪽에 자리 잡은 반달 무늬가 참 특별합니다. 그리고 머리카락을 멋지게 뒤로 넘긴 것 같은 댕기가 인상적입니다.
          <br />
          <br />
          현재 호사비오리는 전 세계적으로 매우 희귀한 멸종위기종으로 지구상에 많아야 500~ 3000마리만 남아 있다고 추정되고 있습니다. 우리나라에서는 1927년에
          발견되었다는 기록을 끝으로 전쟁이후 62년 동안이나 소식이 전해지지 않다가 최근 호사비오리를 비롯해 멸종위기에 처해 있는 새들을 보호하기 위해서 노력을
          기울인 덕분에 DMZ를 중심으로 호사비오리들의 무리가 발견되고 있습니다. 호사비오리를 다시 볼 수 있어서 참 다행입니다. 앞으로도 우리나라를 찾는 철새들을
          위한 보금자리가 지속적으로 늘어나서 추운 겨울날이 되면 전국의 강변 어디에서나 호사비오리를 쉽게 만날 수 있는 날이 오기를 바랍니다.
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [0, -1, -4], far: 50, rotateX: -20 }}>
        <Suspense fallback={null}>
          <mesh scale={30} position={[1, 5, 20]}>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>
          <Duck />

          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky rayleigh={0.9} sunPosition={[10, 10, 10]} />
          <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} minDistance={15} maxDistance={30} />
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
      <Cloud depthTest={false} position={[0, 10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[0, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[-10, -6, 15]} speed={0.2} opacity={0.3} />
      <Cloud depthTest={false} position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  )
}

export default ChineseMerganser
