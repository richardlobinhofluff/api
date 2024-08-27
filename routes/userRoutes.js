const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
// Rota para buscar todos os usuários
router.get('/users', userController.getUsers);
 
// Rota para criar um novo usuário
router.post('/users', userController.createUser);
 
// Rota para atualizar de um usuário existente
router.put('/users/:id', userController.updateUser);
 
// Rota para deletar um usuário existente
router.delete('/users/:id', userController.deleteUser);
 
module.exports = router;
 