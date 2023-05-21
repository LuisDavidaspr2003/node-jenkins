const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    univercidades: {
        type: Schema.Types.ObjectId,
        ref: 'Univercidades',
        required: true
    },
    Etapas: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
    

    
})

module.exports = model('Proyecto', ProyectoSchema)
