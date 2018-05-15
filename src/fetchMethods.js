export function logResponse(response) {
	console.log(response.headers.get('Content-Type'));
	console.log(response.headers.get('Date'));
	console.log(response.status);
	console.log(response.statusText);
	console.log(response.type);
	console.log(response.url);
	return response;
}

export function json(response) {
	return response.json();
}

export function status(response) {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}
