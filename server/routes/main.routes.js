const express = require('express');
const router = express.Router();
const botController = require('../controllers/bot.controller');

    // router.get('/', botController.getUsers);
    router.post('/messages', botController.sendMessage);
    // router.get('/:id', botController.getUser);
    // router.put('/:id', botController.editUser);
    // router.delete('/:id', botController.deleteUser);
module.exports = router;