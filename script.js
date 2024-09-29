document.addEventListener('DOMContentLoaded', () => {
	const chatForm = document.getElementById('chatForm');
	const chatMessage = document.getElementById('chatMessage');
	const botResponse = document.getElementById('botResponse');

	let requestsData = [];
	let responsesData = [];

	// Fetch the JSON files
	fetch('data/requests.json')
		.then(response => response.json())
		.then(data => {
			requestsData = data;
		});

	fetch('data/responses.json')
		.then(response => response.json())
		.then(data => {
			responsesData = data;
		});

	// Function to calculate Levenshtein distance
	function levenshtein(a, b) {
		const matrix = [];

		for (let i = 0; i <= b.length; i++) {
			matrix[i] = [i];
		}

		for (let j = 0; j <= a.length; j++) {
			matrix[0][j] = j;
		}

		for (let i = 1; i <= b.length; i++) {
			for (let j = 1; j <= a.length; j++) {
				if (b.charAt(i - 1) === a.charAt(j - 1)) {
					matrix[i][j] = matrix[i - 1][j - 1];
				} else {
					matrix[i][j] = Math.min(
						matrix[i - 1][j - 1] + 1,
						Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
					);
				}
			}
		}

		return matrix[b.length][a.length];
	}

	// Function to find the relevant response for a given request keyword
	function findResponse(requestKeyword) {
		// Find the intent for the given request keyword
		let intent = null;
		let minDistance = Infinity;
		let closestRequest = null;

		for (const request of requestsData) {
			for (const req of request.requests) {
				const distance = levenshtein(req.toLowerCase(), requestKeyword.toLowerCase());
				if (distance < minDistance) {
					minDistance = distance;
					closestRequest = req;
					intent = request.intent;
				}
			}
		}

		// Log the closest request keyword
		console.log(`Matched Intent: ${intent}`);

		// If intent is found, find the relevant response
		if (intent) {
			for (const response of responsesData) {
				if (response.intent === intent) {
					// Return a random response from the matched intent
					const responses = response.responses;
					if (responses) {
						return responses[Math.floor(Math.random() * responses.length)];
					} else {
						console.error('Responses array is undefined for intent:', intent);
					}
				}
			}
		}

		// Return a default response if no match is found
		return "Sorry, I don't understand.";
	}

	chatForm.addEventListener('submit', function (event) {
		event.preventDefault();
		const userMessage = chatMessage.value.trim();
		if (userMessage) {
			const response = findResponse(userMessage);
			botResponse.textContent = response;
		}
	});
});