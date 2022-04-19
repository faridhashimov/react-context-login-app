const router = require('express').Router()
const { getAllUsers, deleteUser, updateUser } = require('../controllers/userControllers')

router.get('/', getAllUsers)
router.delete('/delete/:id', deleteUser)
router.put('/update/:id', updateUser)

module.exports = router
