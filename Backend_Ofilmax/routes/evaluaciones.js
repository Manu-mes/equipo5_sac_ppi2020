const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/evaluaciones", (req, res) => {
    connection.query('SELECT * FROM actores',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = {connection: connection}