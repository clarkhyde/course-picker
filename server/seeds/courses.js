const coursesData = require("../seed_data/courses");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("courses")
        .del()
        .then(() => knex("courses").insert(coursesData));
};