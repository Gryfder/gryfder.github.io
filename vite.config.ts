import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

import Package from './package.json';

export async function validateAppEnv<T extends 'dev' | 'prod'>(
  env: Record<string, string>,
): Promise<T> {
  const envList = ['dev', 'prod'] as const;

  let value = env['VITE_APP_ENV'];
  if (value === undefined) value = 'prod';

  if (!envList.includes(value as T)) {
    throw new Error(
      `Missing env "VITE_APP_ENV", expect ${envList.join(', ')}, got "${env.VITE_APP_ENV}"}`,
    );
  }

  return value as T;
}

// https://vitejs.dev/config/
export default defineConfig(async (mode) => {
  const env = loadEnv(mode.mode, process.cwd(), 'VITE_');
  await validateAppEnv(env);

  return {
    plugins: [vue()],
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(Package.version),
      'import.meta.env.APP_NAME': JSON.stringify(Package.name),
      'import.meta.env.APP_DATE': `"${new Date().toISOString()}"`,
    },
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  };
});
