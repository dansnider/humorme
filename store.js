module.exports = {
	createEvent({name, location}) {
		console.log(`Add event ${name} at ${location}`);
		return Promise.resolve();
	}
}