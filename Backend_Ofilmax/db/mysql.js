const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'br9cpdzhfcmkt1tmto3k-mysql.services.clever-cloud.com',
  user     : 'uns8d5a55y0ltild',
  password : 'bGRWLU2XFBYkYOecsJQo',
  database : 'br9cpdzhfcmkt1tmto3k'
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