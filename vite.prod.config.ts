import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser',  // 使用terser压缩
    outDir: 'dist',
    terserOptions: {  
      compress: {  
          pure_funcs: ['console.log'], // 只删除 console.log 
          //drop_console: true, // 删除所有 console
          drop_debugger: true, // 删除 debugger  
      }  
    }
  },
});
