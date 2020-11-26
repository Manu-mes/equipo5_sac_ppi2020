const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')

router.get('/evaluacion', (req, res) => {
  connection.query("SELECT * FROM evaluacion", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/evaluacion/:fecha', (req, res) => {
  let Fecha = req.params.fecha
  connection.query("SELECT * FROM evaluacion WHERE Fecha = ?",[Fecha] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({})
   })
})

router.post('/evaluacion', (req, res) => {
  try{
    let {
      Fecha,
      Puntaje,
      Correo,
      Id_puntaje
    } = req.body
    const SQL = `INSERT INTO evaluacion(Fecha,Puntaje,Correo) VALUES(?,?,?)`
    const data = [Fecha, Puntaje, Correo,Id_puntaje]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "evaluacion insertada correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/evaluacion/:Fecha', (req, res) => {
  try{
    let Fecha = req.params.fecha
    let {
      Puntaje,
      Correo,
      Id_puntaje
    } = req.body
    const SQL = `UPDATE evaluacion SET Puntaje = ?,Correo = ?, Id_puntaje = ? WHERE Fecha = ?`
    const data = [Puntaje, Correo,Fecha,Id_puntaje]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "evaluacion actualizada correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/evaluacion/:Fecha', (req, res) => {
  try{
    let   Fecha = req.params.fecha
  
    const SQL = `DELETE FROM evaluacion WHERE Fecha = ?`
    const data = [Fecha]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "evaluacion eliminada correctamente."})
      else
        res.json({mensaje : "evaluacion no existe con esta fecha o ya fue eliminado."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})
module.exports = router