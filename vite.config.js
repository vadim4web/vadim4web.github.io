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
					api: 'modern-compiler',
				},
			},
		},
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						three: ['three'],
						gltfLoader: ['three/examples/jsm/loaders/GLTFLoader.js'],
						dracoLoader: ['three/addons/loaders/DRACOLoader.js'],
					},
				},
			},
			chunkSizeWarningLimit: 550,
		},
	}
})
