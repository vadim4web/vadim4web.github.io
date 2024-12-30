<template>
  <div
    class="canvas-container"
    ref="canvasContainer"
    style="
      position: absolute;
      background-color: transparent;
      filter: drop-shadow(0 0 1rem var(--accent0));
      -webkit-filter: drop-shadow(0 0 1rem var(--accent0));
    "
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  PointLight,
  Color,
  MeshStandardMaterial,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Configuration
const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'
const MODEL_NAME = 'logo.glb'

// Refs and variables
const canvasContainer = ref(null)
let scene, camera, renderer
let directionalLight, ambientLight, pointLight
let model = null

// Utility: Get the current theme color
const getThemeColor = () =>
  getComputedStyle(document.documentElement)
    .getPropertyValue('--accent0')
    .trim()

// Initialize the scene
const initializeScene = () => {
  scene = new Scene()
  camera = new PerspectiveCamera(
    76.5,
    1, // Square aspect ratio initially
    1.5,
    1000
  )
  camera.position.set(0, 0, 5)
}

// Initialize the renderer
const initializeRenderer = () => {
  renderer = new WebGLRenderer({ antialias: true, alpha: true })
  canvasContainer.value.appendChild(renderer.domElement)
  handleResize() // Set the initial size to match `66vmin`
}

// Load the 3D model
const loadModel = () => {
  const loader = new GLTFLoader()
  loader.load(
    `${ASSETS_DIR}${MODEL_NAME}`,
    gltf => {
      model = gltf.scene

      // Update material properties for all meshes
      model.traverse(child => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color: child.material.color,
            metalness: 1.0, // Fully metallic
            roughness: 0.15, // Slight roughness for sharp reflections
            envMapIntensity: 1.5, // Enhance reflection intensity
          })
        }
      })

      scene.add(model)
      renderer.render(scene, camera)
    },
    undefined,
    error => console.error('Error loading model:', error)
  )
}

const setupLighting = () => {
  const lightColor = new Color(getThemeColor())

  directionalLight = new DirectionalLight(lightColor, 100) // Softer intensity
  directionalLight.position.set(5, -2, 5).normalize()
  scene.add(directionalLight)

  ambientLight = new AmbientLight(lightColor, 1) // Reduced ambient light
  scene.add(ambientLight)

  // Add a point light for specular highlights
  pointLight = new PointLight(lightColor, 10, 100)
  pointLight.position.set(1, -5, -10)
  scene.add(pointLight)
}

// Update lights dynamically on theme change
const updateLights = () => {
  const lightColor = new Color(getThemeColor())
  if (directionalLight) directionalLight.color.set(lightColor)
  if (ambientLight) ambientLight.color.set(lightColor)
  if (pointLight) pointLight.color.set(lightColor)
}

// Observe theme changes
const observeThemeChanges = () => {
  const observer = new MutationObserver(updateLights)
  observer.observe(document.documentElement, {
    attributes: true,
  })
  return observer
}

// Resize handler: Keep canvas as a square (66vmin x 66vmin)
const handleResize = () => {
  const vmin = Math.min(window.innerWidth, window.innerHeight) * 1.5
  renderer.setSize(vmin, vmin)
  camera.aspect = 1 // Keep the square aspect ratio
  camera.updateProjectionMatrix()
}

onMounted(() => {
  initializeScene()
  initializeRenderer()
  setupLighting()
  loadModel()

  window.addEventListener('resize', handleResize)
  const themeObserver = observeThemeChanges()

  const animate = () => {
    requestAnimationFrame(animate)
    if (model) {
      model.rotation.x = Math.PI / 2
      model.rotation.z += 0.015 // 0.015 : full turn (2π) / duration (3510ms) * 1000ms/s / FPS (120)
    }
    renderer.render(scene, camera)
  }
  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    themeObserver.disconnect()
    renderer.dispose()
    scene.clear()
  })
})
</script>
