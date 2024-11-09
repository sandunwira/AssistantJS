class Assistant {
	constructor() {
		this.requestsData = [];
		this.responsesData = [];

		// Dynamic Variables
		this.customData = {
			name: "Adam",
			feedback_url: "https://example.com/feedback",
			// Add more custom data here
		};
	}

	// Static utility methods
	static Utility = {
		async fetchData(url) {
			const response = await fetch(url);
			return response.json();
		},

		levenshtein(a, b) {
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
	};

	async initialize() {
		try {
			this.requestsData = await Assistant.Utility.fetchData('data/requests.json');
			console.log("Requests Data:", this.requestsData);
			this.responsesData = await Assistant.Utility.fetchData('data/responses.json');
			console.log("Responses Data:", this.responsesData);
		} catch (error) {
			console.error('Error initializing Assistant:', error);
			throw error;
		}
	}

	// Add the replaceDynamicVariables method
	replaceDynamicVariables(response) {
		return response.replace(/\[([^\]]+)\]/g, (match, variable) => {
			return this.customData[variable] || match;
		});
	}

	findResponse(requestKeyword) {
		let intent = null;
		let minDistance = Infinity;
		let closestRequest = null;

		for (const request of this.requestsData) {
			for (const req of request.requests) {
				const distance = Assistant.Utility.levenshtein(req.toLowerCase(), requestKeyword.toLowerCase());
				if (distance < minDistance) {
					minDistance = distance;
					closestRequest = req;
					intent = request.intent;
				}
			}
		}

		console.log(`Matched Intent: ${intent}`);

		if (intent) {
			for (const response of this.responsesData) {
				if (response.intent === intent) {
					return response.responses[Math.floor(Math.random() * response.responses.length)];
				}
			}
		}

		return "Sorry, I couldn't understand the request.";
	}

	async processQuery(query) {
		try {
			console.log("Query:", query);

			let response;
			response = this.findResponse(query);

			// Replace dynamic variables in all responses
			response = this.replaceDynamicVariables(response);
			console.log("Response:", response);

			return response;
		} catch (error) {
			console.error('Error processing query:', error);
			return "Sorry, an error occurred while processing your request.";
		}
	}
}