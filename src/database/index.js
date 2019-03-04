const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);

module.exports = mongoose;
