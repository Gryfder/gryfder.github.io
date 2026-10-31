/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: 'dev' | 'prod';
  readonly APP_NAME: string;
  readonly APP_VERSION: string;
  readonly APP_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
