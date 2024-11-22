import path from "path";
import fs from 'fs';
export function vitePluginImportPage(strArr: Array<string>){
  return {
    name: 'vite-plugin-import-page',
    async buildStart() {
      const distDir = path.resolve(__dirname, `./src/pages`);

      const getSubFolders = (dir:string) => {
        return fs.readdirSync(dir)
          .filter(file => fs.statSync(path.join(dir, file)).isDirectory())
          .map(folder => folder);
      };
      const subFolders = getSubFolders(distDir);
      console.log(subFolders.filter(value=>strArr.indexOf(value) === -1));

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