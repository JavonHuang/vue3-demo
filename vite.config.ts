import {  defineConfig, loadEnv,mergeConfig } from 'vite'
import baseConfig from './vite.base.config';
import devConfig from './vite.dev.config';
import prodConfig from './vite.prod.config';

export default ({ command,mode }:{command:string,mode:string}) => {
  const env = loadEnv(mode, process.cwd())
  console.log( "参数",command)
  console.log( "参数",mode)
  if(command=="serve"){
  return defineConfig(mergeConfig(baseConfig(env),devConfig))
  }else{
    return defineConfig(mergeConfig(baseConfig(env),prodConfig(env)))
  }
}



// 在Vite构建完成后调用删除文件夹的函数
export function onBuildComplete() {
  console.log("onBuildComplete")
}