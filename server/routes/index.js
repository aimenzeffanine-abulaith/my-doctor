const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Salam!"})
})

// User Routes
router.post("/account/signup", userController.register)

module.exports = router