export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

export interface FormData {
  [key: string]: string | number | boolean;
}

/**
 * Submit form data to Netlify Forms or Formspree
 */
export async function submitForm(
  formName: string,
  data: FormData,
  endpoint?: string,
): Promise<FormSubmissionResult> {
  try {
    // Use Netlify Forms if no endpoint specified
    const submitEndpoint = endpoint || window.location.pathname;

    // Prepare form data
    const formData = new FormData();
    formData.append('form-name', formName);

    // Add all form fields
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const response = await fetch(submitEndpoint, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit to Formspree endpoint
 */
export async function submitToFormspree(
  formspreeId: string,
  data: FormData,
): Promise<FormSubmissionResult> {
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Formspree submission error:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize form input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}
