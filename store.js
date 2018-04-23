const knex = require('knex')(require('./knexfile'))

module.exports = {
	createEvent({name, location}) {
		console.log(`Add event ${name} at ${location}`);
		return knex('event').insert({
			name,
			location
		});
	}
}