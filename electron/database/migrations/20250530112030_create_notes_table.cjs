exports.up = function (knex) {
  return knex.schema.hasTable('notes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('notes', function (table) {
        table.increments('id').primary();
        table.string('title');
        table.text('content');
        table.timestamps(true, true);
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        // table.boolean('is_pinned').defaultTo(false);
        // table.boolean('is_archived').defaultTo(false);
        // table.boolean('is_deleted').defaultTo(false);
        // table.timestamp('deleted_at').nullable();
        // table.timestamp('archived_at').nullable();
        // table.timestamp('pinned_at').nullable();
        // table.timestamp('unarchived_at').nullable();
        // table.timestamp('unpinned_at').nullable();
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('notes');
};
