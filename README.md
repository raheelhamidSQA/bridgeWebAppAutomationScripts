# bridgeautomationwebscript: Cypress + Cucumber Automation Project

This project leverages [Cypress](https://www.cypress.io/) in conjunction with the [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) BDD framework for robust, maintainable, and scalable end-to-end web automation testing. Test scenarios are written in Gherkin syntax for better readability and collaboration with non-developers.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Best Practices](#best-practices)
- [Useful Commands](#useful-commands)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd bridgeautomationwebscript
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Project Structure

```
bridgeautomationwebscript/
├── cypress/
│   ├── fixtures/               # Static test data (JSON, etc.)
│   ├── e2e/
│   │   ├── features/           # .feature files written in Gherkin
│   │   └── step_definitions/   # Step definition files
│   ├── plugins/                # Cypress plugins
│   ├── support/                # Custom commands and support files
├── reports/                    # Test and coverage reports
├── cypress.config.js           # Cypress configuration
├── package.json
└── README.md
```

---

## Writing Tests

- **Feature files**: Write your scenarios in Gherkin syntax under `cypress/e2e/features/`.
- **Step definitions**: Implement the steps in `.js` (or `.ts`) files in `cypress/e2e/step_definitions/`.

**Example Feature File (`login.feature`):**
```gherkin
Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard
```

**Example Step Definition (`login.js`):**
```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the login page', () => {
  cy.visit('/login');
});

When('I enter valid credentials', () => {
  cy.get('#username').type('user');
  cy.get('#password').type('password');
  cy.get('button[type="submit"]').click();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});
```

---

## Running Tests

### Open Cypress Interactive Runner (GUI)
```bash
npx cypress open
```

### Run All Tests Headless (CLI)
```bash
npx cypress run
```

### Run a Specific Feature File
```bash
npx cypress run --spec "cypress/e2e/features/login.feature"
```

---

## Test Reports

- **Mochawesome** or other reporters can be integrated for HTML/JSON reports.
- Reports output to `/reports` (see `cypress.config.js` for details).
- For Cucumber reports, tools like [multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter) can be used.

---

## Best Practices

- Use [fixtures](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Fixtures) for static, reusable test data.
- Put common/reusable Cypress commands in `cypress/support/commands.js`.
- Keep step definitions DRY and focused on test actions, not assertions.
- Use stable selectors (e.g., `data-testid`) for element targeting.
- Make scenarios independent and idempotent.
- Prefer Gherkin steps that are easy to read and maintain.

---

## Useful Commands

- `cy.visit(url)` — Navigate to a web page.
- `cy.get(selector)` — Select elements.
- `cy.contains(text)` — Find by text content.
- `cy.click()` — Click an element.
- `cy.type(text)` — Type in an input.
- `cy.wait(time)` — Wait for a specified time (ms).

---

## Contributing

1. Fork the repository and create your branch:  
   `git checkout -b feature/your-feature`
2. Commit your changes:  
   `git commit -am 'Add new feature'`
3. Push to the branch:  
   `git push origin feature/your-feature`
4. Create a new Pull Request.

---