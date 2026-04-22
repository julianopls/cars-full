const express = require('express')
const router = express.Router()

const carroController = require('../controllers/carros.controller')

router.post('/carros', carroController.criarCarro)
router.get('/carros', carroController.listarCarros)
router.get('/carros/:id', carroController.buscarCarro)
router.put('/carros/:id', carroController.atualizarCarro)
router.delete('/carros/:id', carroController.deletarCarro)

module.exports = router