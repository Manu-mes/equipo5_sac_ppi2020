const {Router} = require("express")
const router = Router()
const fs = require("fs")
const inicioFile = fs.readFileSync("./inicio.json", "utf-8") // Lectura de archivo
const inicioJSON = JSON.parse(inicioFile) //Convertir archivo a JSON

//console.log(inicioJSON)

router.get("/", (req, res) => {
  res.send("API REST Estudiante")
})

router.get("/inicio", (req, res) => {
  res.json(inicioJSON)
})

router.get("/inicio/:id", (req, res) => {
  let id = req.params.id
  let inicioEncontrado = inicioJSON.find(inicio => inicio.id == id)

  if(inicioEncontrado != undefined)
    res.json(inicioEncontrado)
  else
    res.send(`El inicio con ID ${id} no existe`)
})

router.post("/inicio", (req, res) => {
  let {correo, contraseña} = req.body
  let id = inicioJSON.length + 1 
  let nuevoinicio = {
    id : id,
    correo : correo,
    contraseña : contraseña
  }
 
  inicioJSON.push(nuevoinicio)

  fs.writeFileSync("./inicionuevo.json", JSON.stringify(inicionuevoJSON), "utf-8")

  res.status(201).json(nuevoinicio)
})

router.put("/inicio/:id", (req, res) => {
  let id = req.params.id
  let {correo, contraseña} = req.body

  let inicioAModificar = inicioJSON.find(inicio => {
    if(inicio.id == id){
      inicio.correo = correo
      inicio.contraseña = contraseña
      return inicio
    }
  })

  if(inicioAModificar != undefined){
      fs.writeFileSync("./inicio.json", JSON.stringify(inicioJSON), "utf-8")
      res.status(201).json(inicioAModificar)
  }else{
    res.json("El ID del inicio no existe")
  }
})

router.delete("/inicio/:id", (req, res) => {
  res.send("Elimina un inicio")
})

module.exports = router