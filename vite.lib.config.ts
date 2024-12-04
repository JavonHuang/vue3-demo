import { defineConfig } from 'vite';
import { vitePluginDeleteFile } from './vite.user.plugin';

const prodConfig=(env:Record<string, string>)=>{
  return defineConfig({
    plugins:[
    ],
    build: {
      rollupOptions:{
        output:{
          manualChunks:(id)=>{
            if (id.includes("src/pages")) {
             let pathList= id.split('/')
             return `${pathList[pathList.length-2]}/${pathList[pathList.length-1].replaceAll('.vue','')}`;
            }
          }
        },
      },
      minify: 'terser',  // 使用terser压缩
      outDir: 'dist',
      terserOptions: {  
        compress: {  
            pure_funcs: ['console.log'], // 只删除 console.log 
            //drop_console: true, // 删除所有 console
            drop_debugger: true, // 删除 debugger  
        }  
      },
    }
  })
}
export default prodConfig;
