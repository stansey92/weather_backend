
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hot', (table) => {
    table.increments()
    table.string('item').notNullable('').defaultTo('')
    table.decimal('price').notNullable('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hot')
};
