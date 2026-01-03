const express = require('express');
const userController = require('../controllers/userController')
const {userValidatorRules, validate} = require('../middlewares/validator')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Salam!"})
})

// User Routes
router.post("/account/signup", userValidatorRules(), validate, userController.register)

module.exports = router