const bcryptLite = require('./bcrypt-lite');

exports.genSaltSync = bcryptLite.genSaltSync;
exports.compareSync = bcryptLite.compareSync;
exports.hashSync = bcryptLite.hashSync;