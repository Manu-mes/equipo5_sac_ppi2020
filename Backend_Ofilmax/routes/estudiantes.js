const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql_pool')


router.get('/estudiante', (req, res) => {
  connection.query("SELECT * FROM estudiante", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/estudiante/:correo', (req, res) => {
  let correo = req.params.correo
  connection.query("SELECT * FROM estudiante WHERE Correo = ?",[Correo] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({})
   })
})

router.post('/estudiante', (req, res) => {
  try{
    let {
      Correo,
      Contrasena,
      Numero_lista
    } = req.body
    const SQL = `INSERT INTO estudiante(Correo,Contrasena,Numero_lista) VALUES(?,?,?)`
    const data = [Correo, Contrasena, Numero_lista]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "estudiante insertado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/estudiante/:correo', (req, res) => {
  try{
    let Correo = req.params.correo
    let {
      Contrasena,
      Numero_lista
    } = req.body
    const SQL = `UPDATE estudiante SET Contrasena = ?,Numero_lista = ? WHERE Correo = ?`
    const data = [Contrasena, Numero_lista,Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "estudiante actualizado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/estudiante/:correo', (req, res) => {
  try{
    let   Correo = req.params.correo
  
    const SQL = `DELETE FROM estudiante WHERE Correo = ?`
    const data = [Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "estudiante eliminado correctamente."})
      else
        res.json({mensaje : "estudiante no existe con este correo o ya fue eliminado."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})





////

router.post('/estudiantes/Inicio', (req, res)=>{
  try{
      const {
        Contrasena,
        Correo
      } = req.body
      console.log(req.body)
      connection.query('SELECT * FROM estudiante WHERE Correo = ? AND Contrasena = ?', [Correo, Contrasena], (error,result,fields) => {
          if(error){
            console.log(error)
            res.status(500).json({mensaje : "Se presento un error en la consulta"})
          }else{
            if(result.length > 0){
               res.json({mensaje : 'El usuario supero la autenticación', login : true, estudiantes : result[0]})
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