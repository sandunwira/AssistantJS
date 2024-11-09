# AssistantJS
AssistantJS is a lightweight client-side JavaScript chatbot library that can be used as a simple chatbot integration for your web-based project.

## Table of Contents
- **[Demo](#demo)**
- **[Why This Was Created](#why-this-was-created)**
- **[Features](#features)**
- **[Installation](#installation)**
- **[Usage](#usage)**
- **[Configuration](#configuration)**
- **[Contributing](#contributing)**
- **[License](#license)**

## Demo
View the demo **[here](https://sandunwira.github.io/assistantjs)**.

## Why This Was Created
I was searching for custom AI Assistants that I can use offline for my projects, but I couldn't find any of those without having to host locally or without using any external APIs. And, since I'm into creating desktop applications, I wanted to create custom chatbots that we can interact with even without any internet connection or any local hosted frameworks for the end users. Since most of the end users aren't willing to set up any tools or any packages, just to run a simple program.

So, I decided to create my own chatbot framework, that can be used anywhere, even without any internet connection (if you're a developer, you just need to download the repository or the JSON files and you're good to go) or without hosting locally anything. By integrating this assistant with tools like **[Tauri](https://tauri.app)** or **[Electron](https://www.electronjs.org)**, you can build your own custom chatbots, right at your desktop, without even using any of the internet. And of course, this is a simple chatbot framework just for a basic integration. You can create more advanced and complicated assistants with this starter template.

## Features
- Offline usage without any internet connection
- No need for any servers, can run offline
- Easy integration with Tauri or Electron
- Customizable intents and responses

## Installation
To use this assistant for your project, follow these steps:

**1. Fork this repository:**<br>
**[https://github.com/sandunwira/assistantjs/fork](https://github.com/sandunwira/assistantjs/fork)**

**2. Clone the forked repository to your local machine:**
```bash
git clone https://github.com/YOUR_USERNAME/assistantjs.git
```

**3. Navigate to the project directory:**
```bash
cd assistantjs
```

## Usage
**1. Modify Elements According to your Project:**<br>
Since this is a web-based project, you can use CSS frameworks like **[Tailwind](https://tailwindcss.com)**, **[Bootstrap](https://getbootstrap.com)**, **[Shadcn](https://ui.shadcn.com)** to create more stunning and attractive user interfaces for your project.

**2. Fine Tuning Data:**<br>
The data in this project have two sections:
- **Requests (`data/requests.json`):** This file contains requests that are going to be done from the user of the project (The questions/requests that the user sends to the bot).
- **Responses (`data/responses.json`):** This file contains responses that are going to be sent from the bot, as responses from the user's requests (The responses that the bot sends after the user sends a request/message to the bot).

Modify these files according to your project scope.

> **Note:** If you're modifying intents in a file, you need to modify both ***requests.json*** and ***responses.json*** files. As an example, if you remove **happy** intent in ***requests.json*** file, you need to remove **happy** intent in ***responses.json*** file too. Likewise, if you add intents in ***requests.json***, you need to add it in ***responses.json*** file too. Otherwise, the bot will not be working and will not provide responses. And the intents should be the same name in both JSON files.

## Configuration
Formats in the `requests.json` and `responses.json` files:

- **`requests.json` (data/requests.json):**
```json
[
    {
        "intent": "abc",
        "requests": [
            "these will",
            "be the",
            "requests that",
            "we are sending",
            "to the bot"
        ]
    },
    {
        "intent": "xyz",
        "requests": [
            "these will",
            "be the",
            "requests that",
            "we are sending",
            "to the bot"
        ]
    }
]
```

- **`responses.json` (data/responses.json):**
```json
[
    {
        "intent": "abc",
        "responses": [
            "these will",
            "be the",
            "responses that",
            "the bot will be",
            "sending to user"
        ]
    },
    {
        "intent": "xyz",
        "responses": [
            "these will",
            "be the",
            "responses that",
            "the bot will be",
            "sending to user"
        ]
    }
]
```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
