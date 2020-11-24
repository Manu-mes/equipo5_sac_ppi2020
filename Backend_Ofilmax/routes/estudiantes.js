const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql_pool')

router.get('/estudiantes', (req, res) => {
  connection.query("SELECT * FROM estudiante", (error, result, fields) => {
    res.json(result)
   })
})

router.get('/estudiantes/:Correo', (req, res) => {
  connection.query("SELECT * FROM estudiante WHERE Correo = ? ",[req.params.Correo], (error, result, fields) => {
    res.json(result)
   })
})

router.post('/estudiantes/Inicio', (req, res)=>{
  try{
      const {
        Contrasena,
        Correo
      } = req.body
      connection.query('SELECT * FROM estudiantes WHERE Correo = ? AND Contrasena = SHA1(?)', [Correo, Contrasena], (error,result,fields) => {
          if(error){
            res.status(500).json({mensaje : "Se presento un error en la consulta"})
          }else{
            if(result.length > 0){
               res.json({mensaje : 'El usuario supero la autenticación', Inicio : true, estudiantes : result[0]})
            }else{
               res.json({mensaje : 'Este usuario no existe', login : false})
            }
            console.log(result)
           
          }
      })
  }catch(error){
    console.log(error)
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
})

router.put('/estudiantes/:id', (req, res) => {})

router.delete('/estudiantes/:id', (req, res) => {})


module.exports = router