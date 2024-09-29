# assistantjs
AssistantJS is a lightweight JavaScript AI Assistant library that can be used as a simple chatbot integration for your web-based project

View demo in [here](https://sandunwira.github.io/assistantjs)

<hr>

## Why this was created?
I was searching for custom AI Assistants that I can use offline for my projects, but I couldn't find any of those without having to host locally or without using any external APIs. And, since I'm into creating desktop applications, I wanted to create custom chatbots that we can interact even without any internet connection or any local hosted frameworks for the end users. Since, most of the end users aren't willing to setup any tools or any packages, just to run a simple program.

So, I decided to create my own chatbot framework (kinda), that can be used anywhere, even without any internet connection (if you're a developer, you just need to download the repository or the json files and you're good to go) or without hosting locally anything. By integrating this assistant with tools like [Tauri](https://tauri.app) or [Electron](https://www.electronjs.org), you can build your own custom chatbots, right at your desktop, without even using any of the internet. And of course, this is a simple chatbot framework just for a basic integration. You can create more advanced and complicated assistants with this starter template.

<hr>

## How do I setup?
To use this assistant for your project, follow these steps:

#### 1. Fork this repository:
https://github.com/sandunwira/assistantjs/fork

#### 2. Modify Elements According to your Project:
Since this is web-based project, you can use CSS frameworks like [Tailwind](https://tailwindcss.com), [Bootstrap](https://getbootstrap.com), [Shadcn](https://ui.shadcn.com) to create more stunning and attractive user interfaces for your project.

#### 3. Fine Tuning Data:
The data in this project have two sections:
1. Requests (`data/requests.json`):<br>
This file contains requests that is going to be done from the user of the project (The questions/requests that the user sends to the bot).<br>

2. Responses (`data/responses.json`):<br>
This file contains responses that is going to be send from the bot, as responses from the user's requests (The responses that the bot sends after the user sends a request/message to the bot).<br>

Modify these files according to your project scope.<br>

> **Note:** If you're modifying intents in a file, you need to modify both `requests.json` and `responses.json` files. As an example, if you remove `happy` intent in `requests.json` file, you need to remove `happy` intent in `responses.json` file too. Likewise, if you add intents in `requests.json`, you need to add it in `responses.json` file too. Otherwise, the bot will not be working and will not provide responses. And the intents should be the same name in both json files.

<hr>

Formats in the `requests.json` and `responses.json` files are as follows:

`requests.json` ([data/requests.json](https://github.com/sandunwira/assistantjs/blob/main/data/requests.json))
```
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
	},
	...
]
```

`responses.json` ([data/responses.json](https://github.com/sandunwira/assistantjs/blob/main/data/responses.json))
```
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
	},
	...
]
```

<hr>

## Future Implementations
Since this is a template, I want to keep this simple as possible without any advanced configurations for the new users that would use this project, just to setup their own custom chatbot for their websites. So, the content might or not be rarely modified in this repository in the future.

<hr>

```
https://github.com/sandunwira/assistantjs
```
