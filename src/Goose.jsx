import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Stars } from '@react-three/drei'
import { Particles } from './Particles'
import { Grass } from './Grass'
import AnimatedCursor from 'react-animated-cursor'
import GooseModel from './Goose_model'

const Goose = () => {
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
        Swan Goose
      </div>
      <div className="content">
        <div className="text ">
          잘 알려지지 않은 철새 중에서 ‘개리’ 라고 하는 철새가 있습니다. ‘개리’라 는 이름은 활동하는 어느 힙합가수와 동일하기도 하고 새의 이름이라고 보기에는 좀
          독특하다고 할 수 있습니다. 이름의 유래는 주로 갯벌에 서 먹이를 잡고 생활하기 때문에 갯기러기로 불리다가 개리가 되었다고 알려져 있는데 이름 외에도 알면
          알수록 여러 가지로 신기한 새입니다.
          <br />
          <br />
          겨울철에만 우리나라에서 머물다가 떠나는 개리는 주로 러시아의 극동이나 중국의 동북부에서 번식을 합니다. 그런데 지난 30년 동안 중국 내의 개리 번식지가
          파괴되거나 농지로 개발되면서 번식수가 90%정도 감소한 것으로 알려졌습니다. 우리나라에서도 흔하게 볼 수 있는 겨울철 새였지만 지금은 주로 임진강하구와
          한강하구의 지역에서만 발견되고 있습니다. 이제 전 세계에 남은 개리의 수는 약 60,000~90,000마리 정도 입니다. 철새인 개리는 한 국가에서만 보호하는
          것으로는 지킬 수가 없습니다. 여러 나라가 힘을 모아서 개리의 힘찬 날갯짓을 지킬 수 있도록 노력하는 것이 필요합니다.
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [0, 0, 15], far: 500 }}>
        <Suspense fallback={null}>
          <mesh scale={200} position={[0, 0, 0]}>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>
          <GooseModel />
          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
          <Stars fade={true} />
          {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} minDistance={20} maxDistance={60} /> */}
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

export default Goose
