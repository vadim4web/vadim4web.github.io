<template>
  <div
    ref="canvasContainer"
    class="canvas-container abs"
    style="
			background-color: transparent;
			filter: drop-shadow(0 0 1rem var(--accent0));
			-webkit-filter: drop-shadow(0 0 1rem var(--accent0));
		"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	// DirectionalLight,
	// AmbientLight,
	// PointLight,
	// Color,
	MeshStandardMaterial,
	CubeTextureLoader,
	Clock,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvasContainer = ref(null)
let scene, camera, renderer
// let directionalLight, ambientLight, pointLight
let model = null
let environmentMaps = {}
let clock = new Clock()
let animationFrameId = null
let currentTheme = getCurrentTheme() // Tracks current theme to avoid unnecessary updates

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'
const MODEL_NAME = 'logo.glb'

// Preload Environment Maps
const preloadEnvironmentMaps = () => {
	const loader = new CubeTextureLoader()
	environmentMaps.light = loader.load('texture-silver.jpg '.repeat(6).split(' '))
	environmentMaps.dark = loader.load('texture-gold.jpg '.repeat(6).split(' '))
}

// Get Current Theme
function getCurrentTheme()	{
	return	getComputedStyle(document.documentElement)
		.getPropertyValue('--is-dark')
		.trim() === '1'
		? 'dark'
		: 'light'
}

// Initialize Scene and Renderer
const initializeScene = () => {
	scene = new Scene()
	camera = new PerspectiveCamera(76.5, 1, 1.5, 1000)
	camera.position.set(0, 0, 5)
	renderer = new WebGLRenderer({ antialias: true, alpha: true })
	renderer.autoClear = false
	canvasContainer.value.appendChild(renderer.domElement)
	handleResize()
}

// Load Model
const loadModel = () => {
	const loader = new GLTFLoader()
	loader.load(
		`${ASSETS_DIR}${MODEL_NAME}`,
		(gltf) => {
			model = gltf.scene
			updateModelMaterial(currentTheme) // Apply material during initial load
			scene.add(model)
		},
		undefined,
		(error) => console.error('Error loading model:', error)
	)
}

// Update Model Material
const updateModelMaterial = (theme) => {
	if (!model || !environmentMaps[theme]) return
	model.traverse((child) => {
		if (child.isMesh) {
			child.material = new MeshStandardMaterial({
				metalness: 1,
				roughness: 0,
				envMap: environmentMaps[theme],
				envMapIntensity: 1.5,
			})
		}
	})
}

// Setup Lighting
// const setupLighting = () => {
// 	const lightColor = new Color(getComputedStyle(document.documentElement).getPropertyValue('--accent0').trim())
// 	directionalLight = new DirectionalLight(lightColor, 100)
// 	directionalLight.position.set(5, -2, 5).normalize()
// 	ambientLight = new AmbientLight(lightColor, 1)
// 	pointLight = new PointLight(lightColor, 10, 100)
// 	pointLight.position.set(1, -5, -10)
// 	// scene.add(directionalLight, ambientLight, pointLight)
// }

// Update Lighting
// const updateLighting = () => {
// 	const lightColor = new Color(getComputedStyle(document.documentElement).getPropertyValue('--accent0').trim())
// 	directionalLight.color.set(lightColor)
// 	ambientLight.color.set(lightColor)
// 	pointLight.color.set(lightColor)
// }

// Observe Theme Changes
const observeThemeChanges = () => {
	const observer = new MutationObserver(() => {
		const newTheme = getCurrentTheme()
		if (newTheme !== currentTheme) {
			currentTheme = newTheme
			// updateLighting()
			updateModelMaterial(currentTheme)
		}
	})
	observer.observe(document.documentElement, { attributes: true })
	return observer
}

// Resize Handler
const handleResize = () => {
	const vmin = Math.min(window.innerWidth, window.innerHeight) * 1.5
	renderer.setSize(vmin, vmin)
	camera.aspect = 1
	camera.updateProjectionMatrix()
}

// Animation Loop
const animate = () => {
	const delta = clock.getDelta()

	if (model) {
		model.rotation.x = Math.PI / 2
		model.rotation.z += delta * 0.5 // Smooth rotation
	}

	renderer.clear()
	renderer.render(scene, camera)
	animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
	preloadEnvironmentMaps()
	initializeScene()
	// setupLighting()
	loadModel()

	const themeObserver = observeThemeChanges()
	window.addEventListener('resize', handleResize)
	clock.start()
	animate()

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
		themeObserver.disconnect()
		cancelAnimationFrame(animationFrameId)
		renderer.dispose()
		scene.clear()
	})
})
</script>
