import { test, expect } from '@playwright/test';

test.describe('TherapyConnect E2E', () => {
  test('Home page loads and navigates to Book', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /your journey to healing/i })).toBeVisible();
    await page.getByRole('link', { name: /book a session/i }).click();
    await expect(page).toHaveURL(/book/);
    await expect(page.getByTitle(/book a therapy session/i)).toBeVisible();
  });

  test('Contact form validation and submit', async ({ page }) => {
    await page.goto('/contact');
    const name = page.getByLabelText(/name/i);
    const email = page.getByLabelText(/email/i);
    const message = page.getByLabelText(/message/i);
    const submit = page.getByRole('button', { name: /send message/i });

    // Initially disabled
    await expect(submit).toBeDisabled();
    await name.fill('John Doe');
    await email.fill('not-an-email');
    await message.fill('Hello!');
    await expect(submit).toBeDisabled();
    await email.fill('john@example.com');
    await expect(submit).toBeEnabled();
    // Optionally: submit and check for success message or redirect
  });
});
