const bookshelf = require('../bookshelf');

const Courses = bookshelf.model('Courses', {
  tableName: 'courses'

});

module.exports = Courses;