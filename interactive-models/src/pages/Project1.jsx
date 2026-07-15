import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import ProjectNav from '../components/ProjectNav'
import './Project1.css'

export default function Project1() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(0, 1.5, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 10, 7.5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x404040, 0.5))

    const geometry = new THREE.TorusKnotGeometry(0.6, 0.2, 256, 32)
    const material = new THREE.MeshStandardMaterial({ color: 0x60a5fa, metalness: 0.5, roughness: 0.2 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function onResize() {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    let reqId
    const animate = () => {
      reqId = requestAnimationFrame(animate)
      mesh.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener('resize', onResize)
      controls.dispose()
      renderer.forceContextLoss()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
          else obj.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div className="project1-page">
      <ProjectNav current={1} />
      <div className="canvas-wrap" ref={mountRef} />
      <div className="project-info">
        <h2>Project 1 — Interactive Scene</h2>
        <p>Basic three.js scene with camera controls and responsive renderer.</p>
        <p>
          This template uses `three` and `OrbitControls`. Install deps then run
          the dev server to view it.
        </p>
      </div>
    </div>
  )
}
