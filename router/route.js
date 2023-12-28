const express = require('express')
const router =  express.Router()

const control = require('../controllers/controller')
const signupController = require('../controllers/signupController')
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')
const middleware = require('../middleware/jwt')
const studentController = require('../controllers/student')





// router.post('/login', control.loginData)
// router.get('/get',control.getitem)
router.get('/get',middleware.myMiddleware,control.getitem)
router.post('/user',middleware.myMiddleware,control.upload.single('image'),control.postData)
router.get('/edit/:id',control.getData)
router.put('/update/:id', control.updateData)
router.delete('/delete/:id', control.deleteData)

/////////////////SIGNUP/////////////
 router.post('/signup',signupController.upload.any(),signupController.signUp)
 router.post('/login',loginController.upload.any(),loginController.login)
 router.get('/verify',middleware.myMiddleware,userController.getData)


 ////////Student Controller///////
 router.post('/postdata',studentController.createStudent)

module.exports = router