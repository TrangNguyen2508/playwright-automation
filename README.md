<<<<<<< HEAD
# Playwright Automation – SauceDemo

## 📌 Project Overview
This project is an end-to-end automation testing using **Playwright + TypeScript**  
on the **SauceDemo** website.
The goal of this project is to demonstrate:
- Clean automation structure
- Good practices with Playwright
- Readable and maintainable test code
- Junior-level automation skills ready for real projects

Target website:  
👉 https://www.saucedemo.com/

## 🚀 Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)
- Node.js

# Playwright Automation Project – SauceDemo

## 📌 Overview
This project is an **End-to-End Automation Test** project built with **Playwright + TypeScript**, applying **Page Object Model (POM)** and **BaseTest / BasePage** architecture.

The goal of this project is to demonstrate:
- Clean automation structure
- Good practices with Playwright
- Readable and maintainable test code
- Junior-level automation skills ready for real projects

Target website:  
👉 https://www.saucedemo.com/

---

## 🛠 Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **Page Object Model (POM)**

---

## 📂 Project Structure

```text
.
├─ base/
│  ├─ base.page.ts        # BasePage: common navigation (goto)
│  └─ base-test.ts        # BaseTest: inject Page Objects via fixtures
│
├─ pages/
│  ├─ login.page.ts       # Login page actions & locators
│  ├─ inventory.page.ts   # Inventory page actions
│  ├─ cart.page.ts        # Cart page actions
│  └─ checkout.page.ts    # Checkout page actions
│
├─ tests/
│  ├─ login.spec.ts
│  ├─ inventory.spec.ts
│  ├─ cart.spec.ts
│  └─ checkout.spec.ts
│
├─ data/
│  ├─ users.ts            # Test data for users
│  └─ products.ts         # Test data for products
│
├─ playwright.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md


## ✅ Test Scenarios
- Login successfully
- Login failed
- Add product to cart
- Remove product from cart
- Complete checkout flow

## ▶️ How to Run Tests

```bash
npm install
npx playwright test
npx playwright test --ui
npx playwright show-report

Author - Trang
=======
# Playwright Automation – SauceDemo

## 📌 Project Overview
This project is an end-to-end automation testing using **Playwright + TypeScript**  
on the **SauceDemo** website.
The goal of this project is to demonstrate:
- Clean automation structure
- Good practices with Playwright
- Readable and maintainable test code
- Junior-level automation skills ready for real projects

Target website:  
👉 https://www.saucedemo.com/

# Playwright Automation Project – SauceDemo

## 📌 Overview
This project is an **End-to-End Automation Test** project built with **Playwright + TypeScript**, applying **Page Object Model (POM)** and **BaseTest / BasePage** architecture.

The goal of this project is to demonstrate:
- Clean automation structure
- Good practices with Playwright
- Readable and maintainable test code
- Junior-level automation skills ready for real projects

Target website:  
👉 https://www.saucedemo.com/

---

## 🛠 Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **Page Object Model (POM)**

---

## 📂 Project Structure

```text
.
├─ base/
│  ├─ base.page.ts        # BasePage: common navigation (goto)
│  └─ base-test.ts        # BaseTest: inject Page Objects via fixtures
│
├─ pages/
│  ├─ login.page.ts       # Login page actions & locators
│  ├─ inventory.page.ts   # Inventory page actions
│  ├─ cart.page.ts        # Cart page actions
│  └─ checkout.page.ts    # Checkout page actions
│
├─ tests/
│  ├─ login.spec.ts
│  ├─ inventory.spec.ts
│  ├─ cart.spec.ts
│  └─ checkout.spec.ts
│
├─ data/
│  ├─ users.ts            # Test data for users
│  └─ products.ts         # Test data for products
│
├─ playwright.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md


## ✅ Test Scenarios
- Login successfully
- Login failed
- Add product to cart
- Remove product from cart
- Complete checkout flow

## ▶️ How to Run Tests

```bash
npm install
npx playwright test
npx playwright test --ui
npx playwright show-report

Author - Trang

>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1
