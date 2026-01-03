const { body, validationResult } = require('express-validator')

const userValidatorRules = () => {
    return [
        body('name').notEmpty().withMessage('name is required'),
        body('email').notEmpty().withMessage('email is required'),
        body('email').isEmail().withMessage('you must enter a real email'),
        body('password').notEmpty().withMessage('password is required'),
        body('password').isLength({min: 5}).withMessage('password must be at least 5 characters'),
    ]
}


const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({
        [err.path]: err.msg
    }))
    return res.status(400).json({errors: extractedErrors})
}

module.exports = {
    userValidatorRules,
    validate
}