import vue from '@vitejs/plugin-vue'
import path from 'path';
import { defineConfig } from 'vite';

const baseConfig=(env:Record<string, string>)=>{
  console.log( "参数",env)
  // const moduleLits:Array<string>=env.VITE_MODULE.split(',');
  // let externalList:Array<string>=[];
  // moduleLits.forEach((e:string)=>{
  //   externalList.push(`src/pages/report`);
  // })
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
