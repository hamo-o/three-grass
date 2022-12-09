import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Shadow } from '@react-three/drei'
import { Particles } from './Particles'
import { Grass } from './Grass'
import AnimatedCursor from 'react-animated-cursor'
import { useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Model = () => {
  const obj = useLoader(OBJLoader, '/public/models/cat.obj')
  console.log(obj)
  return (
    <>
      {obj && (
        <mesh>
          <primitive object={obj} scale={10} />
        </mesh>
      )}
    </>
  )
}

const Goat = () => {
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
        Mountain Goat
      </div>
      <div className="content">
        <div className="text">
          산양의 이름은 ‘숲 속에 사는 작은 양’이라 는 뜻을 가지고 있는데 사실 생김새는 양 보다 소를 많이 닮았습니다. 물론 크기는 소처럼 크지 않고 다 자라도
          송아지보다 조금 크거나 작은 정도입니다. 산양은 짙 은 회색과 갈색이 섞여있는 털과 쫑긋 솟은 귀, 그리고 단단한 뿔과 긴 꼬리를 가졌습니다. 그리고
          놀랍게도 지 금 산양의 생김새는 2백 만 년 전의 산양의 모습과 거의 비슷하다고 합 니다. 아득한 옛날, 원시의 형질을 거의 그대로 간직하고 있는 것이지 요.
          그래서 산양은 ‘살아있는 화석’이라고도 불립니다.
          <br />
          <br />
          지금 한국에는 전국을 다 합쳐도 약 700마리 정도의 산양만이 살아가고 있습니다. 사실 예전에는 산양이 꽤 많았지만 지금은 멸종위기 1급이자 천연기념물로
          법적인 보호를 받고 있습니다. 기록에 의하면 1950-60년 대, 강원도 지역에 내린 폭설로 인해 먹이가 부족해진 산양이 사람이 사는 곳으로 내려왔을 때에는
          주민들이 약 6천 마리 정도의 산양을 잡았 다고 합니다. 그리고 그렇게 잡힌 산양은 식용으로, 또는 한약재로 사용 되었다고 합니다. 산양에게는 사람이
          무엇보다 참 두려운 존재입니다. 그 이후에 지금처럼 멸종위기에 놓이게 되었지요. 날로 심해지는 환경 파괴와 불법 밀렵으로 인해 서식지 까지 위협을 받고
          있어 산양은 간신히 그 명맥만을 유지하고 있는 상황입니다.
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [1, 1, 1], far: 50, rotateZ: -20 }}>
        <Suspense fallback={null}>
          {/* <mesh>
            <sphereGeometry args={[0.2, 64, 64]}></sphereGeometry>
            <meshBasicMaterial color="#0b2b00" />
          </mesh> */}
          <mesh>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>
          <Model />
          <Clouds />
          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky />
          {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} minDistance={2} maxDistance={30} /> */}
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

export default Goat
