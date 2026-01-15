import { test, expect } from "@playwright/test";

const BASE = "http://localhost:8080";

test("button sizing and color", async ({ page }) => {
  await page.goto(BASE);
  const btn = page.locator("#myBtn");
  await expect(btn).toBeVisible();

  // Verify computed size
  await expect(btn).toHaveCSS("height", "300px");
  await expect(btn).toHaveCSS("width", "40px");

  // Verify background color ("green" resolves to rgb(0, 128, 0))
  await expect(btn).toHaveCSS("background-color", "rgb(0, 128, 0)");
});

test("clicking button logs greeting to console", async ({ page }) => {
  await page.goto(BASE);
  await page.goto(BASE);

  const consolePromise = page.waitForEvent("console", {
    predicate: (m) => m.type() === "log" && m.text().includes("Hello Pradep"),
  });

  await page.click("#myBtn");

  const msg = await consolePromise;
  expect(msg.text()).toContain("Hello Pradep");
});
