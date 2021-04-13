const usersData = require("../seed_data/users");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(() => knex("users").insert(usersData));
};