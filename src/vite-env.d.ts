/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_FORM_ENDPOINT?: string;
  readonly VITE_NETLIFY_FORMS: string;
  readonly VITE_PRACTICE_NAME: string;
  readonly VITE_PRACTICE_ADDRESS: string;
  readonly VITE_PRACTICE_PHONE?: string;
  readonly VITE_PRACTICE_EMAIL?: string;
  readonly VITE_BUSINESS_HOURS: string;
  readonly VITE_EMERGENCY_NUMBER: string;
  readonly VITE_EMERGENCY_TEXT: string;
  readonly VITE_GA_TRACKING_ID?: string;
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  readonly VITE_DEV_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
