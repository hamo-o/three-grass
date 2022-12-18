import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Shadow } from '@react-three/drei'
import { Particles } from './Particles'

import AnimatedCursor from 'react-animated-cursor'

import BirdModel from './Bird_model'

const Bird = () => {
  const navigate = useNavigate()
  const myClick = () => {
    navigate('/', { replace: true })
  }
  //   const obj = useLoader(OBJLoader, '/public/models/cat.obj')

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
        Long-billed Ringed Plover
      </div>
      <div className="content">
        <div className="text">
          흰목물떼새는 지극한 모성애로 유명한 새입니다. 뻐꾸기처럼 알을 다른 새에게 떠넘기는 새가 있는 반면에 흰목물떼새는 알을 헌신적으로 돌보는 새입니다.
          3월에서 7월 사이에 3~4개 정도의 알을 낳고 암수가 교대로 알을 품는데 빗속에서도 절대 둥지를 떠나지 않습니다. 자갈에서 찬 기운이 올라올 때는 체온으로
          따뜻하게 지켜주고 뜨거운 햇빛이 비출 때는 자신의 몸에 물을 묻혀서 시원한 그늘을 만들어 줍니다. 또 둥지를 천적으로부터 보호하기 위해서 둥지의 주변을
          돌멩이나 조개껍데기로 위장을 합니다. 그리고 흰목물떼새는 알과 새끼를 지키기 위해서 특별한 행동을 합니다. 둥지나 새끼 근처에 침입자가 나타나면 부상을
          당한 것처럼 흉내를 내는 것입니다. 날개를 축 늘어뜨리고 다리를 절룩거려서 침입자가 자신을 향해 달려들도록 유인을 합니다. 이런 식으로 조금씩 침입자를
          둥지 근처에서 떼어내어 먼 곳까지 끌고 가면 언제 그랬냐는 듯이 잽싸게 도망을 갑니다. 이렇게 다친 척을 하는 행동은 꼭 흰목물떼새만이 아 니라 종종 다른
          새들에게서도 볼 수 있는데 이것을 가리켜 의상행동 이라고 합니다. 그리고 의상행동을 하는 새들에게는 한 가지 특징이 있습니다. 바로 둥지를 나무위에 짓는
          것이 아니라 땅에 짓는 것입니다. 땅위에 둥지를 짓는 것과 의상행동의 직접적인 연관성은 알 수 없지만 의상행동은 둥지를 지키기 위해서 자신을 위험에
          빠트리는 헌신적인 방법임에는 틀림이 없는 것 같습니다.
          <br />
          <br />
          흰목물떼새가 사는 곳은 이름에서 알 수 있는 것처럼 물가입니다. 하 지만 우리나라에서 자연 그대로의 모습을 유지하고 있는 하천은 점점 사라지고 있습니다.
          4대강 사업을 비롯해서 생태하천을 만들겠다고 강을 헤집어 놓는 하천 정비 사업이 큰 원인이지요. 흰목물떼새는 이 제 지구상에 약 1만여 마리만 남아
          있습니다. 과연 사람이 이용하기 좋은 강을 만드는 것과 생명들이 더불어 사는 강을 만드는 것 이 둘 중 에서 무엇이 더 중요한 것일까요?
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [0, 0, 1], far: 10000 }}>
        <Suspense fallback={null}>
          {/* <mesh>
            <sphereGeometry args={[0.2, 64, 64]}></sphereGeometry>
            <meshBasicMaterial color="#0b2b00" />
          </mesh> */}
          <mesh scale={100}>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>

          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky />
          <BirdModel />
          <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} minDistance={20} maxDistance={30} />
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

export default Bird
