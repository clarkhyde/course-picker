const bookshelf = require('../bookshelf');

const Users = bookshelf.model('Users', {
  tableName: 'users'

});

module.exports = Users;