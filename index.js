const bcryptLite = require('./bcrypt-mini');

exports.genSaltSync = bcryptLite.genSaltSync;
exports.compareSync = bcryptLite.compareSync;
exports.hashSync = bcryptLite.hashSync;