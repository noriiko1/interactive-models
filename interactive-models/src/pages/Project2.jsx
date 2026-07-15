import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import ProjectNav from '../components/ProjectNav'
import './Project2.css'

export default function Project2() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(2, 2, 4)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 10, 7)
    scene.add(dir)

    const geo = new THREE.BoxGeometry(1, 1, 1)
    const mat = new THREE.MeshStandardMaterial({ color: 0xff7b72, metalness: 0.3, roughness: 0.4 })
    const cube = new THREE.Mesh(geo, mat)
    scene.add(cube)

    function onResize() {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    let raf
    const loop = () => {
      raf = requestAnimationFrame(loop)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      controls.dispose()
      renderer.forceContextLoss()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose())
          else o.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div className="project-page">
      <ProjectNav current={2} />
      <div className="canvas-wrap" ref={mountRef} />
      <div className="project-info">
        <h2>Project 2 — Rotating Cube</h2>
        <p>Simple three.js scene with an interactive rotating cube and orbit controls.</p>
      </div>
    </div>
  )
}
