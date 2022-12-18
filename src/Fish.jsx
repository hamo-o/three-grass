import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Shadow } from '@react-three/drei'
import { Particles } from './Particles'
import { Grass } from './Grass'
import AnimatedCursor from 'react-animated-cursor'

import FishModel from './FishModel'

const Fish = () => {
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
        Mandarin Fish
      </div>
      <div className="content">
        <div className="text">
          많은 사람들이 금을 좋아하기 때문인지 금빛을 띄고 있는 동물 들도 덩달아 특별하게 여겨지곤 합니다. 그리고 그중에는 온몸이 번쩍 번쩍 황금빛으로 빛나는
          우리나라의 고유 물고기 황쏘가리도 있습니 다. 황쏘가리는 베테랑 낚시꾼들 사이에서도 엄청난 행운이 있어야만 만날 수 있다고 알려진 물고기입니다. 물론
          천연기념물이기 때문에 함 부로 잡았다가는 문화재보호법에 의해서 처벌을 받습니다. 그러니 혹 시 모르고 잡았더라도 반드시 놓아주어야 합니다. 황쏘가리의
          생김새 는 주변에서 쉽게 접할 수 있는 쏘가리와 거의 비슷하지만 몸통이 옆으 로 더 납작하고 황금색입니다. 어릴 때는 일반 쏘가리와 비슷하게 검정 색
          얼룩무늬가 있지만 성장하면서 점점 엷어집니다. 그리고 다 자라게 되면 그 무늬는 흔적만 남고 온몸이 짙은 황금색으로 변하지요. 실제로 강에서 번쩍이는
          황금색 물고기를 만나면 얼마나 신기할까요?
          <br />
          <br />
          그런데 요즘 황쏘가리들이 생존을 위협 받고 있습니다. 바로 블루길과 배스 같은 외래종 물고기들이 생태계를 교란하고 있기 때문입니다. 이 전에는 없었던 식성
          좋은 외래종들이 황쏘가리의 치어들을 마구 잡아 먹어서 황쏘가리의 숫자가 많이 줄어들고 있습니다. 또 낚시나 서식지 파괴와 같이 사람들이 직접 미치는
          영향도 매우 크지요. 강에서 이 신비 로운 황금물고기를 계속 만나기 위해서는 앞으로 세심한 주의와 적극 적인 보호가 필요합니다.
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [0, -0.1, 8], far: 50 }}>
        <Suspense fallback={null}>
          {/* <mesh>
            <sphereGeometry args={[0.2, 64, 64]}></sphereGeometry>
            <meshBasicMaterial color="#0b2b00" />
          </mesh> */}
          <mesh scale={200}>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>
          <FishModel />
          <Clouds />
          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky />
          {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} minDistance={4} maxDistance={10} /> */}
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

export default Fish
