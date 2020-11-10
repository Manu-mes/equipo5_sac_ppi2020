const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bvorwk7lqvpsyxsgpn7a-mysql.services.clever-cloud.com',
  user     : 'uujkvcjxqiigthvk',
  password : 'mJUFZjGbQl88C9shhKHq',
  database : 'bvorwk7lqvpsyxsgpn7a'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}