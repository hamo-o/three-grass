import * as THREE from 'three'
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
          <meshBasicMaterial color="#0b2b00" />
        </mesh>
      )}
    </>
  )
}

const Cat = () => {
  const navigate = useNavigate()
  const myClick = () => {
    navigate('/', { replace: true })
  }
  // const obj = useLoader(OBJLoader, '/public/models/cat.obj')

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
        Leopard Cat
      </div>
      <div className="content">
        <div className="text">
          지금 우리나라에서 상위 포식자라고 할 수 있는 동물은 삵입니다. 강력한 라이벌로 담비가 있지만 담비는 잡식성이기 때문에 육식동물인 삵을 상위 포식자로
          여기고 있습니다. 그런데 사실 삵이 상위 포식자라는 것은 참 슬픈 일입니다. ‘호랑이 없는 굴에 여우가 왕이다‘라는 속담처럼 우리나라에서 호랑이, 늑대,
          여우, 표범 등의 맹수들이 대부분 멸종했기 때문에 간신히 살아남은 삵이 그 자리를 차지하고 있는 것이기 때문입니다. 그리고 비록 상위 포식자라 하더라도
          사냥할 수 있는 동물들은 설치류나 작은 새 등 입니다.
          <br />
          <br />
          삵의 생김새는 고양이와 매우 비슷합니다. 그러나 고양이 보다 몸집이 크고 사납기 때문에 다 자란 삵은 고양이와 쉽게 구분할 수 있습니다. 다만 새끼의
          경우에는 작고 귀여운 고양이처럼 보이기 때문에 종종 고양이로 착각해서 데려다가 키우는 일이 발생합니다. 삵은 멸종위기 동물로 지정되어 있어서 함부로
          키우면 안 되는 동물입니다. 그런데 다행스럽게도 새끼 일지라도 삵과 고양이를 구별할 수 있는 뚜렷한 특징이 있습니다. 따라서 조금만 신경 쓰면 모르고
          데려가는 실수는 하지 않을 수 있습니다. 삵은 고양이와는 다르게 이마에 세로로 그어져 있는 두 줄의 검은색 줄무늬가 있는 것이 큰 특징입니다. 그리고 자세히
          보면 고양이와는 다른 얼룩무늬들이 있고 귀도 조금 작습니다.
          <br />
          <br />
          예전에는 삵 역시 다른 동물들처럼 흔하게 볼 수 있는 동물이었습니다. 밤 중에 몰래 민가에 내려와 닭을 잡아먹어서 문제가 될 정도였지요. 그러나 70년대에
          들어서 쥐를 잡기위해 대량의 쥐약을 사용하면서 삵의 수난이 시작 되었습니다. 약에 중독된 쥐를 잡아먹은 많은 삵들이 함께 죽은 것입 니다. 그리고 계속해서
          야생동물들이 살아갈 서식지들이 파괴되면서 삵 도 점점 사라지고 이제는 멸종위기까지 몰리게 되었습니다. 이대로 삵 까 지 사라진다면 우리나라 자연생태계의
          다음 상위 포식자는 누가 될까요?
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [0, 5, 0], far: 50 }}>
        <Suspense fallback={null}>
          <mesh>
            <torusGeometry></torusGeometry>
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

export default Cat
