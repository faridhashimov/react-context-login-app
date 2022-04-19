const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')


//REGISTER USER
const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    //Check if user exists
    const userExist = await User.findOne({ username })

    if (userExist) {
        return res.status(401).json('Username already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    //Save user into db
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
}


//LOGIN USER
const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json(user)
        } else {
            res.status(401).json('Wrong username or password')
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { registerUser, loginUser }
