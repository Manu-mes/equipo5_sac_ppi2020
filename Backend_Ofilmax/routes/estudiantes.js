const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/estudiantes", (req, res) => {
  res.json(estudiantesJSON)
})

router.get("/estudiantes/:id", (req, res) => {
  let id = req.params.id
  let estudianteEncontrado = estudianteJSON.find(estudiante => estudiante.id == id)

  if(estudiantEncontrado != undefined)
    res.json(estudiantEncontrado)
  else
    res.send(`El estudiante con ID ${id} no existe`)
})

router.post("/estudiante", (req, res) => {
  let {correo, contraseña, rol} = req.body
  let id = estudianteJSON.length + 1 
  let nuevoestudiante = {
    id : id,
    correo : correo,
    contraseña : contraseña,
    rol : rol
  }
 
  registroJSON.push(nuevoestudiante)

  fs.writeFileSync("./estudiante.json", JSON.stringify(estudianteJSON), "utf-8")

  res.status(201).json(nuevoestudiante)
})

router.put("/estudiante/:id", (req, res) => {
  let id = req.params.id
  let {correo, contraseña, rol} = req.body

  let estudianteAModificar = estudianteJSON.find(estudiante => {
    if(estudiante.id == id){
      estudiante.correo = correo
      estudiante.contraseña = contraseña
      estudiante.rol = rol
      return estudiante
    }
  })

  if(estudianteAModificar != undefined){
      fs.writeFileSync("./estudiante.json", JSON.stringify(estudianteJSON), "utf-8")
      res.status(201).json(estudianteAModificar)
  }else{
    res.json("El ID del estudiante no existe")
  }
})

router.delete("/estudiante/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let indiceestudiante = JSONestudiante.findIndex(estudiante => estudiante.id == id)
  
  if(indiceestudiante != -1){
    JSONregistro.splice(indiceestudiante, 1)
    fs.writeFileSync('./estudiante.json', JSON.stringify(JSONestudiante), 'utf-8')
    res.status(200).json(indiceestudiante + 1)
  }else{
    res.status(200).json('estudiante no existe')
  }
})


  
module.exports = router