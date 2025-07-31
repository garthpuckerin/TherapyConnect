import { test, expect } from '@playwright/test';

test.describe('TherapyConnect E2E', () => {
  test('Home page loads and has correct structure', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TherapyConnect/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('Navigation between pages works correctly', async ({ page }) => {
    const pages = [
      { url: '/', heading: /your journey to healing/i },
      { url: '/about', heading: /about me/i },
      { url: '/services', heading: /our services/i },
      { url: '/book', heading: /book a session/i },
      { url: '/contact', heading: /get in touch/i },
    ];

    for (const { url, heading } of pages) {
      await page.goto(url);
      await expect(page).toHaveURL(url);
      await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();

      // Test skip link functionality
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(page.getByRole('main')).toBeFocused();
    }
  });

  test('Contact form validation and submit', async ({ page }) => {
    await page.goto('/contact');

    // Test form validation
    const name = page.getByLabel(/name/i);
    const email = page.getByLabel(/email/i);
    const message = page.getByLabel(/message/i);
    const submit = page.getByRole('button', { name: /send message/i });

    await expect(submit).toBeDisabled();
    await name.fill('Test User');
    await email.fill('invalid-email');
    await message.fill('Test message');
    await expect(submit).toBeDisabled();

    await email.fill('test@example.com');
    await expect(submit).toBeEnabled();
  });

  test('Booking form validation', async ({ page }) => {
    await page.goto('/book');

    const name = page.getByLabel(/name/i);
    const email = page.getByLabel(/email/i);
    const date = page.getByLabel(/preferred date/i);
    const submit = page.getByRole('button', { name: /book session/i });

    await expect(submit).toBeDisabled();
    await name.fill('Test User');
    await email.fill('test@example.com');
    await date.fill('2023-01-01');
    await expect(submit).toBeEnabled();
  });

  test('Theme toggle changes color scheme', async ({ page }) => {
    await page.goto('/');

    const getBgColor = async () => {
      return await page.evaluate(() => {
        return window.getComputedStyle(document.documentElement).backgroundColor;
      });
    };

    const initialBg = await getBgColor();
    await page.getByRole('button', { name: /toggle theme/i }).click();
    const newBg = await getBgColor();

    expect(newBg).not.toBe(initialBg);
  });

  test('Mobile menu works correctly', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is for mobile viewport');

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menu = page.getByRole('navigation');
    const menuButton = page.getByRole('button', { name: /menu/i });

    // Menu should be hidden initially on mobile
    await expect(menu).not.toBeVisible();

    // Open menu
    await menuButton.click();
    await expect(menu).toBeVisible();

    // Navigate to a page
    await menu.getByRole('link', { name: /services/i }).click();
    await expect(page).toHaveURL(/services/);
    await expect(menu).not.toBeVisible();
  });

  test('Page has proper heading structure', async ({ page }) => {
    await page.goto('/');

    const headings = await page.$$eval('h1, h2, h3', (elements) => {
      return elements.map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim(),
      }));
    });

    // Verify we have at least one h1
    expect(headings.some((h) => h.tag === 'h1')).toBeTruthy();

    // Verify heading hierarchy is correct
    for (let i = 0; i < headings.length - 1; i += 1) {
      const current = parseInt(headings[i].tag[1], 10);
      const next = parseInt(headings[i + 1].tag[1], 10);
      expect(next).toBeLessThanOrEqual(current + 1);
    }
  });
});
