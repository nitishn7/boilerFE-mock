// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://api.example.com/users", () => {
		return HttpResponse.json([
			{ id: 1, name: "John Doe" },
			{ id: 2, name: "Jane Smith" },
		]);
	}),

	// Only intercept POST requests to this specific URL
	http.post("https://api.example.com/posts", () => {
		return HttpResponse.json({ id: 1, title: "New Post" }, { status: 201 });
	}),
];
