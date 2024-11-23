import vue from '@vitejs/plugin-vue'
import path from 'path';
import { defineConfig } from 'vite';
import { vitePluginImportPage } from './vite.user.plugin';

const baseConfig=(env:Record<string, string>)=>{ 
  const deleteModule=env.VITE_EXCLUDE_MODULE==""?[]: env.VITE_EXCLUDE_MODULE.split(',')
  return defineConfig({
    base: './',
    // 通用基础配置项
    plugins: [
      vue(),
      vitePluginImportPage(deleteModule),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
  });
}
export default baseConfig;
