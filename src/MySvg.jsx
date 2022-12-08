import React, { Suspense, useMemo } from 'react'
import { useLoader } from 'react-three-fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const SvgShape = ({ shape, color, index }) => (
  <mesh>
    <meshLambertMaterial attach="material" color={color} polygonOffset polygonOffsetFactor={index * -0.1} />
    <shapeBufferGeometry attach="geometry" args={[shape]} />
  </mesh>
)

const SvgAsync = React.memo(({ url, sceneRef }) => {
  const { paths } = useLoader(SVGLoader, url)
  const shapes = useMemo(() => paths.flatMap((path, index) => path.toShapes(true).map((shape) => ({ index, shape, color: path.color }))), [paths])
  return (
    <group
      ref={sceneRef}
      children={shapes.map((props, key) => (
        <SvgShape key={key} {...props} />
      ))}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={[-0.01, 0.01, 0.01]}
    />
  )
})

const Svg = (props) => <Suspense children={<SvgAsync {...props} />} />

export default Svg
