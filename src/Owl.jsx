import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Environment, OrbitControls, Sky, Cloud, CameraShake, Shadow } from '@react-three/drei'
import { Particles } from './Particles'
import AnimatedCursor from 'react-animated-cursor'

import { OwlModel } from './OwlModel'

const Owl = () => {
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
        Eagle Owl
      </div>
      <div className="content">
        <div className="text">
          부엉이는 밤에 활동하는 새들 중에서 그 대표로 알려져 있습니다. 여러 동화나 이야기를 보다보면 깜깜한 숲속에서 커다란 눈을 말똥말똥 뜨고 있는 부엉이가
          자주 등장합니다. 그런데 부엉이는 밤에 활동한다는 특징 외에도 잡은 먹이를 나무에 차곡차곡 잘 저장해 놓기 때문에 우리나라에서는 부자새로 부르기도
          합니다. 그리고 서양에서는 오래전부터 지혜의 상징으로 불리기도 하지요.
          <br />
          <br />
          그리고 이런 부엉이들 중에서 우리나라에 살면서 덩치가 가장 크고 사 나운 부엉이가 있는데요 바로 수리부엉이입니다. 몸길이가 약 70cm정 도이며 날개를
          펼치면 길이가 2m나 됩니다. 같은 부엉이인 칡부엉이의 두 배가 되는 크기이지요. 그래서 이름에도 맹금류를 나타내는 수리가 붙어 있습니다. 게다가 꿩, 토끼,
          뱀, 고라니 새끼, 삵 그리고 같은 맹금 류들 까지 사냥하는 명실상부한 우리나라 밤하늘의 제왕입니다.
          <br />
          <br />
          그렇지만 최근에는 사람들이 사는 근처로 다가와서 강아지나 고양이를 잡아먹는 것이 발견될 정도로 서식지와 먹이가 줄어들어 생존에 위협을 받고 있습니다.
          멸종위기종으로 분류될 정도로 개체수가 많이 줄어 보 호가 필요한 새가 되었습니다. 지금도 도로위의 죽어있는 동물을 먹기 위해 달려들거나 도로위에서 먹이를
          먹고 있다가 차에 충돌해서 죽거나 다치는 등 많은 수리부엉이들이 사라져 가고 있습니다.
        </div>
      </div>
      <Canvas dpr={1.5} camera={{ position: [1, 0, 1], far: 50, rotateZ: -20 }}>
        <Suspense fallback={null}>
          {/* <mesh>
            <sphereGeometry args={[0.2, 64, 64]}></sphereGeometry>
            <meshBasicMaterial color="#0b2b00" />
          </mesh> */}
          <mesh scale={100}>
            <torusKnotGeometry></torusKnotGeometry>
            <meshBasicMaterial color="white" />
          </mesh>
          <OwlModel />
          <Clouds />
          <Environment preset="sunset" />
          <Particles amount={333} size={0.01} opacity={0.6} />
          <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
          <Sky />
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

export default Owl
