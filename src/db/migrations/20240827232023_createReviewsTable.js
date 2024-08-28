/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id");
    table.text("content");
    table.integer("score");
    table.integer("critic_id").unsigned();
    table
      .foreign("critic_id")
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE");
    table.integer("movie_id").unsigned();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
