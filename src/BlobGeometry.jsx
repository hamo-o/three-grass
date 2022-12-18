import * as THREE from 'three'
import React, { useEffect, useRef, forwardRef, useState } from 'react'
import { ComputedAttribute } from '@react-three/drei'
import { useThree, useFrame } from 'react-three-fiber'
import { useNavigate } from 'react-router-dom'
import Perlin from 'perlin.js'

Perlin.seed(Math.random())

import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { set } from 'lodash-es'

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

const svgMesh = () => {
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
  return svgGroup
}

const myMesh = () => {
  const positions = new Float32Array([1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0])

  const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])

  const colors = new Float32Array([0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1])

  const indices = new Uint16Array([0, 1, 3, 2, 3, 1])
  return (
    // <mesh>
    //   <bufferGeometry>
    //     <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
    //     <bufferAttribute attach="attributes-color" array={colors} count={colors.length / 3} itemSize={3} />
    //     <bufferAttribute attach="attributes-normal" array={normals} count={normals.length / 3} itemSize={3} />
    //     <bufferAttribute attach="index" array={indices} count={indices.length} itemSize={1} />
    //   </bufferGeometry>
    //   <meshStandardMaterial vertexColors side={DoubleSide} />
    // </mesh>
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      <bufferAttribute attach="attributes-color" array={colors} count={colors.length / 3} itemSize={3} />
      <bufferAttribute attach="attributes-normal" array={normals} count={normals.length / 3} itemSize={3} />
      <bufferAttribute attach="index" array={indices} count={indices.length} itemSize={1} />
    </bufferGeometry>
  )
}

export const BlobGeometry = forwardRef((props, ref) => {
  const geom = useRef()
  const navigate = useNavigate()

  return (
    <mesh
      ref={ref}
      onClick={() => {
        navigate('/detail', { replace: true })
      }}>
      <torusKnotGeometry ref={geom}></torusKnotGeometry>
      <meshBasicMaterial color="#0b2b00" />
    </mesh>
  )
})
