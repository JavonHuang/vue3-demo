import { defineConfig,loadEnv } from 'vite';
  const env = loadEnv("dev", process.cwd())

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': {
        target: env.VITE_APP_SERVER, // 目标服务器的地址
        changeOrigin: true, // 是否改变源地址
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
});
