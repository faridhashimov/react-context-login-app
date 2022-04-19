const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')

//GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}

//UPDATE USER
const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body,
                    password: hashedPassword,
                },
                { new: true }
            )
            res.status(200).json(updatedUser)
        } else {
            res.status(401).json(`You are not allowed to do that`)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

//DELETE USER
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json(`User ${user.username} has been deleted`)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = { getAllUsers, deleteUser, updateUser }
