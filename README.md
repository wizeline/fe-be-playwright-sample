# <img src="https://playwright.dev/img/playwright-logo.svg" width="100" height="100"> Front-End and API Automation using Playwright
## Version
1.1 

## Introduction

The purpose of this project is to provide a real world template to perform Front-End, API and Visual testing using Playwright with TypeScript.

###### Coverage
This project covers the following scenarios and practices:

###### Automation
  - Use of Page Object Model
  - Use of Data Provider
  - Use of Environment Variables
  - Use of Hooks
  - Multi-browser execution
  - Parallel execution
  - Test filtering
  - Headless/headed mode execution
  - Debug mode
  - Record and Play(Playwright's Code Generator) 
###### API Testing (REST)
  - OAuth authentication
  - GET, POST and DELETE methods
  - Query Parameters
  - Response code validation
  - Response body validation
  - Serial execution(Playwright's Serial Mode)
###### Front-End Testing
  - E2E Testing
  - Atlassian Login
  - Login skip(using Playwright's Storage State)
  - HTTP Response interception
  - Post-test cleanup through API
  - Visual testing
    - Web-first assertions(using Playwright's smart retry)
    - Element masking(omit elements from the comparison)
###### CI/CD
  - GitHub Actions implementation
###### Reporters
  - HTML(Playwright)
  - Allure  

## Tech Stack

- Playwright
- TypeScript
- GitHub Actions

## Project Structure
```
├── .github/workflows       # Folder containing the GitHub Actions files.
├── API                     # Main API Testing folder.
│   ├── classes             # All the API classes and methods.
│   ├── data                # Data provider files.
│   └── tests               # API Tests are located here.                 
├── front-end               # Main Page Object Model folder for the Front-End tests.
│   ├── data                # Data provider files.
│   ├── page-objects        # Page Objects.
│   └── tests               # Front-End Tests are located here.
└── .gitignore
└── README.md
└── package-lock.json
└── package.json
└── playwright.config.ts
└── .env
```

## Pre-requisites

1. [Node.js](https://nodejs.org/en/download/) (latest version).
2. [VSCode](https://code.visualstudio.com/download) (highly recommended).
3. [Playwright Test for VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) (highly recommended).


## Project Setup

1. Clone this repository.
2. Navigate to the project folder using the terminal.
3. Run the ```npm install``` command.
4. Create a .env file at root level with the following variables:
```
EMAIL=your@email.com
PASSWORD=your_password
BASE_URL=https://trello.com/
API_BASE_URL=https://api.trello.com/1/
API_KEY=your_api_key
API_TOKEN=your_token
```
5. Create a new [Trello account](https://trello.com/signup) (in case you don't have one already).
6. Create a new board called "Test Board".
7. Make sure the board has the following Lists: To Do, Doing, Done.
8. Generate your [API Key and Token](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/) and place them in the .env file.

## GitHub Actions
Make sure to create [Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) for each environment variable stated above. This is used to create a .env file for the GitHub Actions executions.

All the actions are defined in the "playwright.yml" file. It performs the following actions in order:

```
└── API                     # It executes all the API tests for Cards and Boards.
     └── E2E                # It executes all the front-end tests for Cards on Chromium:headless mode.
```

__*The E2E testing job requires the API job to run successfully first.__

In order to trigger the actions: perform a new push/pull-request on the main/master branch. 

## Dependencies
- @playwright/test
- allure-playwright
- dotenv

## Scripts
- ```ui-mode```: Launches the UI Mode.
- ```cards-fe```: Runs all the front-end Cards tests on chromium, firefox and webkit: headed mode.
- ```cards-fe-headless```: Runs all the front-end Cards tests on chromium, firefox and webkit: headless mode.
- ```cards-fe-chromium```: Runs all the front-end Cards tests on chromium: headed mode.
- ```cards-fe-headless-chromium```: Runs all the front-end Cards tests on chromium: headedless mode.
- ```cards-fe-chromium-html```: Runs all the front-end Cards tests on chromium: headless mode, using the Allure reporter.
- ```cards-fe-chromium-allure```: Runs all the front-end Cards tests on chromium: headless mode, using the Allure reporter.
- ```cards-fe-chromium-debug```: Runs all the front-end Cards tests on chromium: debug mode.
- ```cards-api```: Runs all the API Cards tests.
- ```boards-api```: Runs all the API Boards tests.
- ```api```: Runs all the API tests.
- ```api-html```: Runs all the API tests using the HTML reporter
- ```visual```: Runs all the Visual tests.
- ```visual-firefox```: Runs all the Visual tests on firefox: headed.
- ```visual-allure```: Runs all the Visual tests on chromium: headed, using the Allure reporter.
- ```code-gen```: Runs the code generator mode.
- ```storage-state```: Runs the Storage State login test.
- ```html```: Launches the generated HTML report.
- ```allure```: Launches the generated Allure report.
