
const Proyecto = require('../models/proyecto')
const { request, response} = require('express')
const Cliente = require('../models/cliente')
const Etapa = require('../models/Etapas')
const Univercidades = require('../models/univercidades')
const TipoProyecto = require('../models/tipoProyecto')


const createProyecto= async (req = request, 
    res = response) => {
    try{
        console.log("Peticion de creacion...")
        const data = req.body
        console.log(data)
        const { cliente, Etapas, univercidades, tipoProyecto } = data;
        
        const clienteDB = Cliente.findOne({
            _id: cliente._id,
             estado: true
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'Cliente invalido'})
        }

        
        const EtapasDB = Etapa.findOne({
            _id: Etapas._id,
            estado: true
        })
        if(!EtapasDB){
            return res.status(400).json({msg: 'Etapa invalida'})
        }


        
        const univercidadesDB = Univercidades.findOne({
            _id: univercidades._id,
            estado: true
        })
        if(!univercidadesDB){
           return res.status(400).json({msg: 'univercidades  invalido'})
        }


        
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id,
            estado: true
        })
        if(!tipoProyectoDB){
           return res.status(400).json({msg: 'Proyecto  invalido'})
        } 
        
        

        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getProyecto = async (req = request, 
    res = response) => {
        try{
            console.log("Peticion de consulta...")
            const proyectoDB = await Proyecto.find()
                .populate({
                    path: 'cliente'
                    
                })
                .populate({
                    path: 'Etapas'
                   
                })
                .populate({
                    path: 'univercidades',
                    
                })
                .populate({
                    path: 'tipoProyecto'
                })
            return res.json(proyectoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { createProyecto, getProyecto, updateProyectoByID } 