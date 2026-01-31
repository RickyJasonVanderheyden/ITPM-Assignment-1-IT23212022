# IT3040 - ITPM Assignment 1: Automated Testing
**Topic:** Automated Test Generation for Singlish-to-Sinhala Converter  
**Target Application:** [SwiftTranslator](https://www.swifttranslator.com/)

---

## 👤 Student Details
* **Student ID:** IT23212022
* **Module:** IT3040 - IT Project Management (ITPM)

---

## 📂 Project Overview
This project contains the automated test script generated using **Playwright (TypeScript)** to validate the functionality and robustness of the Singlish-to-Sinhala conversion tool. 

The test suite covers **35+ test scenarios** as defined in the attached Excel test plan (`IT23212022.xlsx`), including:
1.  **Positive Functional Tests:** verifying correct translation of simple, compound, and complex sentences.
2.  **Negative Functional Tests:** verifying system robustness against invalid inputs (URLs, code, mixed scripts).
3.  **UI Tests:** verifying the real-time "Instant Update" feature of the interface.

---

## 🛠️ Prerequisites
Before running the tests, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [VS Code](https://code.visualstudio.com/) (Recommended)

---

## 🚀 Installation & Setup

Follow these steps to set up the testing environment.

1.  **Install Node.js**
    * Download and install the **LTS version** from [nodejs.org](https://nodejs.org/).
    * Verify installation in your terminal:
    ```bash
    node -v
    ```

2.  **Open the Project**
    * Unzip `IT23212022_Assignment1`.
    * Open the folder in **VS Code**.

3.  **Install Project Dependencies**
    * Run this command to install the required packages:
    ```bash
    npm install
    ```

4.  **Install Browsers**
    * Download the necessary browser binaries for Playwright:
    ```bash
    npx playwright install
    ```

---

## 🏃‍♂️ How to Run the Tests

You can run the tests using any of the options below.

### Option 1: Visual Mode (Headed) ✨
Opens the browser window so you can watch the automation interact with the website in real-time.
```bash
npx playwright test --headed
```

---

### Option 2: Chromium Only (Recommended) ✨
Opens the browser window so you can watch the automation interact with the website in real-time.
Only opens chromium browser.
```bash
npx playwright test --project=chromium --headed
```
