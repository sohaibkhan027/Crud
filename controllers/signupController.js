const userModels = require('../models/model')
const multer = require('multer')

const upload = multer();

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("kkkkkkkk",req.body);
        if (!name || !email || !password) {
            throw new Error('Name, email, and password are required fields.');
        }

        const signupData = {
            name: name,
            email: email,
            password: password,
        };
        console.log("hellow",name,email,password);
        const newUser = new userModels(signupData);
        console.log(newUser);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
    signUp,
    upload
}