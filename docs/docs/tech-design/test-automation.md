---
id: test-automation
title: Test automation
---

## Unit test

### Strategy

Jest is used for unit testing. Files contains unit test cases have format
`*.test.js`.

Focus on writing unit test for core elements of the system:

- Domain logic
- Application logic: process flow, validation, ...
- System constraints
- ...

### `client` folder

Focus on:

- Service classes (`*Service.js`) as they contains the core application logic
- Validator (`*Validator.js`) as they contains validation logic which is belong
  to system constraints
- Error classes (`*Error.js`)

P/S: Why don't write test for client's React components using `Enzyme`?

> Answer:
>
> 1. UI is very volatile (change frequently) so write test for it. Every time
>    changing the UI, we then have to change the UI test. This is time
>    consuming.
>
> 2. We should spend time writing unit test for logical parts of the app rather
>    rather than UI parts of the system.

### `common` folder

Focus on:

- Files in `common/models` folder as they contains shared system constraints and
  logic.

### `server` folder

Focus on:

- `server/models` folder as it contains file having both domain and application
  logic.

**TODO:** Need contribution to write unit test for server

## E2E test

### Strategy

- Nightwatch is mainly used for E2E test.
- Configuration and test cases for E2E test are located in `test/e2e` folder.
  E2E test cases are written in `*.e2e.js` files.
- We don't have (and cannot) write E2E test for all use cases of the system, so
  we should focus only on core and important use cases.
- For each use case, we write at least 1 success scenario for it.

### Test environment

#### DB

An in-memory-mongo DB instance will automatically start every time test starts
and stop when test ends (thanks to `mongodb-memory-server` package).

#### Server

- Server is automatically started when test starts and stop when test ends
- Environment variables that only applied for E2E test are configured in
  `test/e2e/e2e.env` file. E.g: For testing purpose you may only to upload file
  to local file fs rather than real S3 bucket.

### Use of Puppeteer

Because sometimes Nightwatch Selenium headless browser doesn't work with single
page web app due to its bugs, we use Puppeteer as an alternative in these cases.

Reference to `test/e2e/admin/authentication.e2e.js` for example.

In summary:

- First, try to write E2E test with Nightwatch.
- If test case doesn't work on Nightwatch headless browser, then use Puppeteer
  instead.
