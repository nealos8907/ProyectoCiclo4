const mongoose = require('mongoose');
let tareaSchema = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

module.exports= mongoose.model('Tarea',tareaSchema,'Tareas');