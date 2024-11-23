import path from "path";
import fs from 'fs';
export function vitePluginImportPage(strArr: Array<string>) {
  return {
    name: 'vite-plugin-import-page',
    async buildStart() {
      const distDir = path.resolve(__dirname, `./src/pages`);

      const getSubFolders = (dir: string) => {
        return fs.readdirSync(dir)
          .filter(file => fs.statSync(path.join(dir, file)).isDirectory())
          .map(folder => folder);
      };
      const subFolders = getSubFolders(distDir);
      const importModuleList = subFolders.filter(value => strArr.indexOf(value) === -1);
      console.log(importModuleList)

      const writeStream = fs.createWriteStream(path.resolve(__dirname, `./src/router/module.ts`), 'utf8');
      let content =''
      let exportList:Array<string>=[];

      if(importModuleList.length==0){
        content = 'const allModule:Record<string, () => Promise<unknown>>={}\n';
        exportList.push(`...allModule`)
      }
      
      importModuleList.forEach((e:string)=>{
        content=content+`const module_${e} = import.meta.glob('../pages/**/*.vue');\n`
        exportList.push(`...module_${e}`)
      })
      content=content+`export default {${exportList.join(',')}}`
      writeStream.write(content);
      writeStream.end();
      writeStream.on('finish', () => {
        console.log('File writing finished.');
      });
    },
  };
}
export function vitePluginDeleteFile(strArr: Array<string>) {
  function deleteFile(str: string) {
    const distDir = path.resolve(__dirname, `./dist/${str}`);
    try {
      fs.rm(distDir, { recursive: true, force: true }, (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`delete path:${distDir} finish`)
      });
    } catch (err) {
      console.error(`Error deleting the ${distDir} directory:`, err);
    }
  }
  return {
    name: 'vite-plugin-delete-file',
    async closeBundle() {
      if (strArr.length > 0) {
        strArr.forEach((e) => {
          deleteFile(`/assets/${e}`);
        })
      }
    },
  };
}