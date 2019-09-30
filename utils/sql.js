const config = require('../config');
const mysql = require('mysql');

var connect  = mysql.createPool({
    connectionLimit : 10,
    queueLimit      : 100,
    waitForConnections : true,
    host            : config.host,
    user            : config.uname,
    port            : config.port,
    password        : config.upass,
    database        : config.db
  });

  module.exports = connect;