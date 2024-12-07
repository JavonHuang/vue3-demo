import vue from '@vitejs/plugin-vue'
import path from 'path';
import { defineConfig } from 'vite';

const baseConfig=(_env:Record<string, string>)=>{ 
  return defineConfig({
    base: './',
    // 通用基础配置项
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
  });
}
export default baseConfig;
