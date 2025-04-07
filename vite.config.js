import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr'; // Добавлен импорт SVGR
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
	plugins: [react(), tailwindcss(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@data': path.resolve(__dirname, './src/data'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@img': path.resolve(__dirname, './src/img'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@services': path.resolve(__dirname, './src/services'),
		},
	},
});
