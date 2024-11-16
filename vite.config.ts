import { defineConfig } from 'vite'
import baseConfig from './vite.base.config';
import devConfig from './vite.dev.config';
import prodConfig from './vite.prod.config';

export default ({ command,mode }:{command:string,mode:string}) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // const env = loadEnv(mode, process.cwd())
  // const isProduction = process.env.NODE_ENV === 'production' ;

  console.log( "参数",command)
  console.log( "参数",mode)

  return defineConfig({
   ...baseConfig,
   ...devConfig,
   ...prodConfig,
  })
}
