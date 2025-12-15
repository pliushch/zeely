import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export default defineConfig({
  base: '/zeely/',
  plugins: [react(), tailwindcss(), viteTsconfigPaths()],
  resolve: {
    alias: {
      '@': resolveApp('src'),
      '@core': resolveApp('src/core'),
      '@images': resolveApp('src/core/common/assets/images'),
      '@ui': resolveApp('src/core/common/ui'),
      '@utils': resolveApp('src/core/common/utils'),
      '@user/*': resolveApp('src/core/user'),
    },
  },
});
