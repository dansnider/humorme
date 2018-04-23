
exports.up = function(knex, Promise) {
	return knex.schema.createTable('event', function(t) {
		t.increments('id').primary();
		t.string('name').notNullable();
		t.string('location').notNullable();
		t.timestamps(false, true);
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('event');
};
