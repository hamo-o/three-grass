import * as THREE from 'three'
import React, { useEffect, useRef, forwardRef } from 'react'
import { ComputedAttribute } from '@react-three/drei'
import Perlin from 'perlin.js'

Perlin.seed(Math.random())

import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const computeFlowerDensity = (geometry) => {
  const position = geometry.getAttribute('position')
  const density = []
  const vertex = new THREE.Vector3()
  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i)
    const p = vertex.clone().multiplyScalar(1)
    const n = Perlin.simplex3(...p.toArray())
    let m = THREE.MathUtils.mapLinear(n, -1, 1, 0, 1)
    if (m > 0.15) m = 0
    density.push(m)
  }
  return new THREE.Float32BufferAttribute(density, 1)
}

export const BlobGeometry = forwardRef((props, ref) => {
  const geom = useRef()

  const fillMaterial = new THREE.MeshBasicMaterial({ color: '#F3FBFB' })
  const stokeMaterial = new THREE.LineBasicMaterial({
    color: '#00A5E6'
  })

  const loader = new SVGLoader()
  const svgUrl = '../static/objects/small-map.svg'
  const svgGroup = new THREE.Group()
  const updateMap = []
  svgGroup.scale.y *= -1

  loader.load(svgUrl, (data) => {
    data.paths.forEach((path) => {
      const shapes = path.toShapes(true)

      shapes.forEach((shape) => {
        const meshGeometry = new THREE.ExtrudeBufferGeometry(shape, {
          depth: 20,
          bevelEnabled: false
        })
        const linesGeometry = new THREE.EdgesGeometry(meshGeometry)
        const mesh = new THREE.Mesh(meshGeometry, fillMaterial)
        const lines = new THREE.LineSegments(linesGeometry, stokeMaterial)

        updateMap.push({ shape, mesh, lines })
        svgGroup.add(mesh, lines)
      })
    })
  })

  useEffect(() => {}, [])

  return (
    <mesh ref={ref}>
      <boxGeometry ref={geom}></boxGeometry>
      <meshBasicMaterial color="#221600" />
    </mesh>
  )
})
