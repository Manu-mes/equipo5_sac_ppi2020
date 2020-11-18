mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bpt7ewe3rq1b02qisczd-mysql.services.clever-cloud.com',
  user     : 'u8gwdf7vynq4ll5a',
  password : 'hy3vHN8ko3UbkbAawVRP',
  database : 'bpt7ewe3rq1b02qisczd'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}