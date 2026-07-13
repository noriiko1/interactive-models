import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './Project3.css'

export default function Project3() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(0, 1, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const pl = new THREE.PointLight(0x98ffb3, 1)
    pl.position.set(-2, 2, 2)
    scene.add(pl)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0x98ffb3, roughness: 0.25, metalness: 0.2 })
    )
    scene.add(sphere)

    function onResize() {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    let anim
    const animate = () => {
      anim = requestAnimationFrame(animate)
      sphere.rotation.y += 0.008
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(anim)
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
      <div className="canvas-wrap" ref={mountRef} />
      <div className="project-info">
        <h2>Project 3 — Shader / Surface Experiments</h2>
        <p>Placeholder scene for shader experiments and surface exploration.</p>
      </div>
    </div>
  )
}
