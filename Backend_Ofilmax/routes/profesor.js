const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql_pool')


router.get('/profesor', (req, res) => {
  connection.query("SELECT * FROM profesor", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/profesor/:correo', (req, res) => {
  let correo = req.params.correo
  connection.query("SELECT * FROM profesor WHERE Correo = ?",[correo] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({mensaje : "Error durante la consulta"})
   })
})

router.post('/profesor', (req, res) => {
  try{
    let {
      Correo,
      Contrasena,
      Nombre
    } = req.body
    const SQL = `INSERT INTO profesor(Correo,Contrasena,Nombre) VALUES(?,?,?)`
    const data = [Correo, Contrasena, Nombre]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "profesor insertado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/profesor/:correo', (req, res) => {
  try{
    let Correo = req.params.correo
    let {
      Contrasena,
      Nombre
    } = req.body
    const SQL = `UPDATE profesor SET Contrasena = ?,Nombre = ? WHERE Correo = ?`
    const data = [Contrasena, Nombre,Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "profesor actualizado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/profesor/:correo', (req, res) => {
  try{
    let   Correo = req.params.correo
  
    const SQL = `DELETE FROM profesor WHERE Correo = ?`
    const data = [Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "profesor eliminado correctamente."})
      else
        res.json({mensaje : "estudiante no existe con este correo o ya fue eliminado."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})
module.exports = router