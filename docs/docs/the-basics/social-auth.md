---
id: social-auth
title: Social auth
---

By default the app support Google login using
[loopback-component-passport](https://loopback.io/doc/en/lb3/Third-party-login-using-Passport.html)

You can remove it from if you don't need, or add more auth option like Facebook,
LinkedIn, ... by following the library documentation.

## Login with Google

- **Step 1:** Create Google login credential to get `client ID` and
  `client secret`
- **Step 2:** Update `.env` file with keys `GOOGLE_CLIENT_ID` and
  `GOOGLE_CLIENT_SECRET`

## Login with other social auth options (Facebook, LinkedIn, ...)

- **Step 1:** Create necessary credential information depending on which social
  networks you're gonna use
- **Step 2:** Update `.env` file with new environment variables for those
  credential values
- **Step 3:** Update `components/social-auth.js` file following the
  [loopback-component-passport](https://loopback.io/doc/en/lb3/Third-party-login-using-Passport.html)
  documentation

## Notes

- DO NOT commit those secret credential information to code base
- Must update `example.env` file to contains any new environment variables
- Should consider merging user accounts when users use same email address for
  both email/password login as well as other social networks login.
