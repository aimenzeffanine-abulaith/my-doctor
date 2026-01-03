const express = require('express');
const userController = require('../controllers/userController')
const {userValidatorRules, validate} = require('../middlewares/validator')
const isLoggedIn = require('../middlewares/auth')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Salam!"})
})

// User Routes
router.post("/account/signup", userValidatorRules(), validate, userController.register)
router.post("/account/signin", userController.login)
router.get("/account/me", isLoggedIn, userController.me)

module.exports = router