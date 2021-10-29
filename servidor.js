const express = require('express');
const aplicacion = express();
const mongoose = require('mongoose');
const router = express.Router();

const tareaSchema = require('./Modelos/Tarea.js');

aplicacion.use(express.urlencoded({extended:true}));
aplicacion.use(express.json());


mongoose.connect("mongodb+srv://PrincipalUser:Nestor123@pruebas.ixh9t.mongodb.net/dbPrueba?retryWrites=true&w=majority");

router.get('/Tarea',(req,res)=>{

    res.send('Prueba grupo 09');
});

router.post('/Tarea',(req,res)=>{
    let nuevaTarea = new tareaSchema({
        idTarea : req.body.idTarea,
        nombreTarea : req.body.nombreTarea,
        detalleTarea : req.body.detalleTarea

    });

    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea almacenada correctamente");
    })
})

aplicacion.use(router);
aplicacion.listen(4000,()=>{
    console.log("servidor web iniciado")
})