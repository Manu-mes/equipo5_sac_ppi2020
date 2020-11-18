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

router.post('/estudiantes', (req, res) => {})

router.put('/estudiantes/:id', (req, res) => {})

router.delete('/estudiantes/:id', (req, res) => {})


module.exports = router