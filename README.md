![yes-hero-banner-illustration](https://github.com/user-attachments/assets/9623e970-e9ba-4847-bb28-8bfc8fb2dea2)
# Yes As A Service API Client
A tiny JavaScript/TypeScript client for the Yes As A Service API — fetch random positive affirmations with a single request.

### 📦 Installation
```console
npm install yes-as-a-service-api-client
```

### 📜 Design Philosophy
1. Zero configuration
2. No inputs required
3. Minimal surface area
4. Predictable API responses
5. Native fetch support
6. TypeScript-first

### 🔤 Example Usage
```javascript
import { getYesAffirmation } from "yes-as-a-service-api-client";

async function run() {
  const response = await getAYes();
  if (response.code === "api-ok") {
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

### 📘  Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
