/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.boolean("is_showing").defaultTo(false);
    table.integer("movie_id").unsigned();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table.integer("theater_id").unsigned();
    table
      .foreign("theater_id")
      .references("theater_id")
      .inTable("theaters")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies_theaters");
};
