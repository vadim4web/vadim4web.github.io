import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	const isProduction = mode === 'production' || command === 'build'
	const base = isProduction ? process.env.VITE_BASE_URL : '/'

	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		base,
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler', // or "modern"
				},
			},
		},
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						// Separate three.js into its own chunk
						three: ['three'],
						// Separate GLTFLoader into its own chunk
						gltfLoader: ['three/examples/jsm/loaders/GLTFLoader.js'],
						// Separate DRACOLoader into its own chunk
						dracoLoader: ['three/addons/loaders/DRACOLoader.js'],
					},
				},
			},
		},
	}
})
