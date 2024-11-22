import { defineConfig } from 'vite';
import { vitePluginDeleteFile,vitePluginImportPage } from './vite.user.plugin';

const prodConfig=(env:Record<string, string>)=>{
  const deleteModule=env.VITE_EXCLUDE_MODULE==""?[]: env.VITE_EXCLUDE_MODULE.split(',')
  return defineConfig({
    plugins:[
      vitePluginImportPage(deleteModule),
      vitePluginDeleteFile(deleteModule),
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
