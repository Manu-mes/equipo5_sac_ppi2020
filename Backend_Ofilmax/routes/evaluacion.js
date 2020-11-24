const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql_pool')

router.get('/evaluacion', (req, res) => {
  connection.query("SELECT * FROM evaluacion", (error, result, fields) => {
    res.json(result)
   })
})

router.get('/evaluacion/:Fecha', (req, res) => {
  connection.query("SELECT * FROM estudiante WHERE Correo = ? ",[req.params.Correo], (error, result, fields) => {
    res.json(result)
   })
})