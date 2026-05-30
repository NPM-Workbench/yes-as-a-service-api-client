![yes-hero-banner-illustration](https://github.com/user-attachments/assets/a9b0dab5-7890-435c-b768-a9a6dd098518)
![npm](https://img.shields.io/npm/v/yes-as-a-service-api-client)
![downloads](https://img.shields.io/npm/dw/yes-as-a-service-api-client)
![license](https://img.shields.io/npm/l/yes-as-a-service-api-client)
![Security Policy](https://img.shields.io/badge/security-policy-brightgreen)
![npm_provenance](https://img.shields.io/badge/npm-provenance-brightgreen?logo=npm)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/yes-as-a-service-api-client)
# Yes As A Service API Client

A tiny JavaScript/TypeScript client for the Yes As A Service API — fetch random positive affirmations with a single request.

### 📦 Installation

```console
npm install yes-as-a-service-api-client
```

### 🐚 Design Philosophy

1. Zero configuration
2. No inputs required
3. Minimal surface area
4. Predictable API responses
5. Native fetch support
6. TypeScript-first

### 🔤 Example Usage

```javascript
import { getAYes } from 'yes-as-a-service-api-client';

async function run() {
  const response = await getAYes();
  if (response.code === 'api-ok') {
    console.log(response.payload?.affirmation);
  } else {
    console.error(response.message);
  }
}

run();

// Sample Success Response
/*
{
  "code": "api-ok",
  "message": "No errors encountered, check payload",
  "payload": {
    "affirmation": "Yes! Everything is working exactly as intended."
  }
}
*/

// Sample Error Response
/*{
  "code": "api-fail",
  "message": "Something went wrong",
  "payload": null
}*/
```

### 📗 Test Coverage

```
PASS  src/get-a-yes/index.test.ts
  getAYes
    ✓ returns api-ok and payload when fetch resolves with ok=true
    ✓ returns api-fail when response.ok is false
    ✓ returns api-fail when fetch throws
    ✓ returns api-fail when json parsing fails
    ✓ returns object payload with affirmation on success (payload test)
    ✓ returns null payload on fetch error (payload null test)
```

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

### 📘 Contributing

Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### 🔒 Security & Privacy
1. This package is open source and intended to provide reusable utilities for application development. It does not collect, store, transmit, sell, or share user data, and it does not include analytics, tracking, telemetry, cookies, local storage usage, backend services, or project-owned data collection mechanisms.
2. For more details, including vulnerability reporting guidance and consumer security recommendations, please see the [Security Policy](https://github.com/NPM-Workbench/yes-as-a-service-api-client/security/policy).

### ❤️ Support

Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
