const {Router} = require("express")
const router = Router()
const fs = require("fs")
const registroFile = fs.readFileSync("./registro.json", "utf-8") // Lectura de archivo
const registroJSON = JSON.parse(registroFile) //Convertir archivo a JSON

//console.log(estudiantesJSON)

router.get("/", (req, res) => {
  res.send("API REST Estudiante")
})

router.get("/registro", (req, res) => {
  res.json(registroJSON)
})

router.get("/registro/:id", (req, res) => {
  let id = req.params.id
  let registroEncontrado = registroJSON.find(registro => registro.id == id)

  if(registroEncontrado != undefined)
    res.json(registroEncontrado)
  else
    res.send(`El registro con ID ${id} no existe`)
})

router.post("/registro", (req, res) => {
  let {correo, contraseña, rol} = req.body
  let id = registroJSON.length + 1 
  let nuevoregistro = {
    id : id,
    correo : correo,
    contraseña : contraseña,
    rol : rol
  }
 
  registroJSON.push(nuevoregistro)

  fs.writeFileSync("./registro.json", JSON.stringify(registroJSON), "utf-8")

  res.status(201).json(nuevoregistro)
})

router.put("/registro/:id", (req, res) => {
  let id = req.params.id
  let {correo, contraseña, rol} = req.body

  let registroAModificar = registroJSON.find(registro => {
    if(registro.id == id){
      registro.correo = correo
      registro.contraseña = contraseña
      estudiante.rol = rol
      return registro
    }
  })

  if(registroAModificar != undefined){
      fs.writeFileSync("./registro.json", JSON.stringify(registroJSON), "utf-8")
      res.status(201).json(registroAModificar)
  }else{
    res.json("El ID del registro no existe")
  }
})

router.delete("/registro/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let indiceregistro = JSONregistro.findIndex(registro => registro.id == id)
  
  if(indiceregistro != -1){
    JSONregistro.splice(indiceregistro, 1)
    fs.writeFileSync('./registro.json', JSON.stringify(JSONregistro), 'utf-8')
    res.status(200).json(indiceregistro + 1)
  }else{
    res.status(200).json('registro no existe')
  }
})

module.exports = router