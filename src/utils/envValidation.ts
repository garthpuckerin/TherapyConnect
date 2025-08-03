interface EnvConfig {
  APP_TITLE: string;
  APP_DESCRIPTION: string;
  FORM_ENDPOINT?: string;
  NETLIFY_FORMS: string;
  PRACTICE_NAME: string;
  PRACTICE_ADDRESS: string;
  PRACTICE_PHONE?: string;
  PRACTICE_EMAIL?: string;
  BUSINESS_HOURS: string;
  EMERGENCY_NUMBER: string;
  EMERGENCY_TEXT: string;
  GA_TRACKING_ID?: string;
  PLAUSIBLE_DOMAIN?: string;
  DEV_MODE: string;
}

/**
 * Validate and return environment variables
 */
export function validateEnvironment(): EnvConfig {
  const requiredVars = [
    'VITE_APP_TITLE',
    'VITE_APP_DESCRIPTION',
    'VITE_NETLIFY_FORMS',
    'VITE_PRACTICE_NAME',
    'VITE_PRACTICE_ADDRESS',
    'VITE_BUSINESS_HOURS',
    'VITE_EMERGENCY_NUMBER',
    'VITE_EMERGENCY_TEXT',
    'VITE_DEV_MODE',
  ];

  const missingVars: string[] = [];

  requiredVars.forEach((varName) => {
    if (!import.meta.env[varName]) {
      missingVars.push(varName);
    }
  });

  if (missingVars.length > 0) {
    const errorMessage = `Missing required environment variables: ${missingVars.join(', ')}`;
    console.error(errorMessage);

    // In development, show a helpful error
    if (import.meta.env.MODE === 'development') {
      console.error('Please create a .env file based on .env.example');
    }

    // Don't throw in production or test to avoid breaking the app
    if (import.meta.env.MODE !== 'production' && import.meta.env.MODE !== 'test') {
      throw new Error(errorMessage);
    }
  }

  return {
    APP_TITLE: import.meta.env.VITE_APP_TITLE || 'TherapyConnect',
    APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Professional Therapy Services',
    FORM_ENDPOINT: import.meta.env.VITE_FORM_ENDPOINT,
    NETLIFY_FORMS: import.meta.env.VITE_NETLIFY_FORMS || 'true',
    PRACTICE_NAME: import.meta.env.VITE_PRACTICE_NAME || 'Dr. Sarah Johnson, LPC',
    PRACTICE_ADDRESS: import.meta.env.VITE_PRACTICE_ADDRESS || '123 Wellness Way, Suite 200',
    PRACTICE_PHONE: import.meta.env.VITE_PRACTICE_PHONE,
    PRACTICE_EMAIL: import.meta.env.VITE_PRACTICE_EMAIL,
    BUSINESS_HOURS: import.meta.env.VITE_BUSINESS_HOURS || 'Mon–Fri 9am–6pm',
    EMERGENCY_NUMBER: import.meta.env.VITE_EMERGENCY_NUMBER || '988',
    EMERGENCY_TEXT:
      import.meta.env.VITE_EMERGENCY_TEXT || 'If you are experiencing a crisis, call 988.',
    GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
    PLAUSIBLE_DOMAIN: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
    DEV_MODE: import.meta.env.VITE_DEV_MODE || 'false',
  };
}

/**
 * Get environment configuration (cached)
 */
let envConfig: EnvConfig | null = null;

export function getEnvConfig(): EnvConfig {
  if (!envConfig) {
    envConfig = validateEnvironment();
  }
  return envConfig;
}

/**
 * Check if we're in development mode
 */
export function isDevelopment(): boolean {
  return import.meta.env.MODE === 'development';
}

/**
 * Check if we're in production mode
 */
export function isProduction(): boolean {
  return import.meta.env.MODE === 'production';
}
