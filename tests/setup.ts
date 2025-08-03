import '@testing-library/jest-dom';
import { beforeAll } from 'vitest';

// Mock environment variables for testing
beforeAll(() => {
  // Set up mock environment variables for tests
  Object.defineProperty(import.meta, 'env', {
    value: {
      VITE_APP_TITLE: 'TherapyConnect',
      VITE_APP_DESCRIPTION: 'Professional Therapy Services',
      VITE_NETLIFY_FORMS: 'true',
      VITE_PRACTICE_NAME: 'Dr. Sarah Johnson, LPC',
      VITE_PRACTICE_ADDRESS: '123 Wellness Way, Suite 200',
      VITE_BUSINESS_HOURS: 'Mon–Fri 9am–6pm',
      VITE_EMERGENCY_NUMBER: '988',
      VITE_EMERGENCY_TEXT: 'If you are experiencing a crisis, call 988.',
      VITE_DEV_MODE: 'false',
      MODE: 'test',
    },
    writable: true,
    configurable: true,
  });
});
