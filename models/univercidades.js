const {Schema, model} = require('mongoose')

const univercidadesSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    Direccion: {
        type: String,
        required: [true, 'Direccion requerida'],
        unique: [true, 'La Direccion debe ser única']
    },
    Telefono: {
        type: Date,
        required: [true, 'Telefono requerido'],
        unique: [true, 'El Telefono debe ser único']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Univercidades', univercidadesSchema)