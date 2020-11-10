const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')

router.get('/profesor', (req, res) => {
  connection.query("SELECT * FROM profesor", (error, result, fields) => {
    res.json(result)
   })
})

router.get('/profesor/:id', (req, res) => {
  connection.query("SELECT * FROM profesor", (error, result, fields) => {
    res.json(result)
   })
})

router.post('/profesor', (req, res) => {})

router.put('/profesor/:id', (req, res) => {})

router.delete('/profesor/:id', (req, res) => {})


module.exports = router