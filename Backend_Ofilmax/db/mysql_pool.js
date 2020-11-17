mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bvorwk7lqvpsyxsgpn7a-mysql.services.clever-cloud.com',
  user     : 'uujkvcjxqiigthvk',
  password : 'mJUFZjGbQl88C9shhKHq',
  database : 'bvorwk7lqvpsyxsgpn7a'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}