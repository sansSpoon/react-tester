export function logResponse(response) {
	console.log(response.headers.get('Content-Type'));
	console.log(response.headers.get('Date'));
	
	for (var pair of response.headers.entries()) {
   console.log(pair[0]+ ': '+ pair[1]);
	}
	
	console.log(response.type);
	console.log(response.url);
	console.group("I'm in the glovebox");
	console.log(response.status);
	console.log(response.statusText);
	console.log(response.ok);
	console.groupEnd();
	console.log(response);
	console.dir(response);
	console.dir(response.body);
	return response;
}

export function json(response) {
	return response.json();
}

export function status(response) {
	if (response.ok) {
		console.info("response ok");
		console.dir(response);
		return Promise.resolve(response);
	} else {
		console.info("response rejected");
		console.dir(response);
		return Promise.reject(new Error(response.statusText));
	}
}

export function inspectResponse(response) {
	return response.json().then((json) => ({
			status: response.status,
			data: json,
		})
	);
}


/*
fetch('/404').then(function(response) {
  if (response.status === 404) {
    return response.json()
  }
}).then(function(object) {
  console.log(object.type, object.message)
})
*/