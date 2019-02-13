//checks if serviceWorker is registered and logs status in the console

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}
