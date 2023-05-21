const {Schema, model} = require('mongoose')

const EtapasSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    anteproyecto: {
        type: String,
        required: [true, '(Anteproyecto requerido'],
        unique: [true, '(Anteproyecto debe ser único']
    },
    Entrega_parcial_1: {
        type: String,
        required: [true, 'Entrega Parcial 1 requerido'],
        unique: [true, 'Entrega Parcial 1 debe ser única']
    },
    Entrega_parcial_2: {
        type: String,
        required: [true, 'Entrega Parcial 2 requerido'],
        unique: [true, 'Entrega Parcial 2 debe ser única']
    },
    Entrega_Final: {
        type: String,
        required: [true, 'Entrega Final requerido'],
        unique: [true, 'Entrega Final debe ser única']
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

module.exports = model('Etapa',EtapasSchema)