
exports.up = function(knex) {
  return knex.schema.createTable('courses',(table)=>{
      table.increments("id").primary();
      table.string("course").notNullable();
      table.string("general_comment");
      table.integer("timesplayed").notNullable().defaultTo(0);
      table.integer("rating").notNullable().defaultTo(0);
      table.timestamp("last_played");
      table.timestamp("created_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  
};
