const prisma = require('../data/prisma')


exports.criarCarro = async (req, res) => {
  try {
    const { nome, marca, ano } = req.body

    const carro = await prisma.carro.create({
      data: { nome, marca, ano }
    })

    res.status(201).json(carro)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
}


exports.listarCarros = async (req, res) => {
  try {
    const carros = await prisma.carro.findMany()
    res.json(carros)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
}

exports.buscarCarro = async (req, res) => {
  try {
    const { id } = req.params

    const carro = await prisma.carro.findUnique({
      where: { id: Number(id) }
    })

    res.json(carro)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
}


exports.atualizarCarro = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, marca, ano } = req.body

    const carro = await prisma.carro.update({
      where: { id: Number(id) },
      data: { nome, marca, ano }
    })

    res.json(carro)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
}


exports.deletarCarro = async (req, res) => {
  try {
    const { id } = req.params

    await prisma.carro.delete({
      where: { id: Number(id) }
    })

    res.json({ mensagem: "Carro deletado" })
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
}