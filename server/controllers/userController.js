const bcrypt = require('bcryptjs')
const models = require('../models')

exports.register = async (req, res) => {
    const {name, email, password, userType, location, specialization, address, workingHours, phone} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await models.User.create({
            name,
            email,
            password: hashPassword,
            userType,
            latitude: location.latitude,
            longitude: location.longitude
        })

        if(userType === 'doctor') {
            const profile = await models.Profile.create({
                userId: user.id,
                specialization,
                address,
                workingHours,
                phone
            })
        }

        res.status(200).json({message: "Your account has been created successfully"})
    } catch (e) {
        res.status(500).json(e)
    }
}