const { Router } = require('express')
const { createProyecto,getProyecto} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyecto)

module.exports = router;