const userModels    = require("../models/model")
const jwt           = require('jsonwebtoken');
const secretKey     = 'me-nai-batau-ga';

const multer = require('multer')

const upload = multer();


const login = async (req, res) => {
    try {
        console.log("object", req.body);
        const { email, password } = req.body;
        console.log(req.body);
        const user = await userModels.findOne({ email });
        console.log("loginuser",user);
        if (!user || user.password !== password) {
            alert("user")
            return res.status(401).json({ error: 'Invalid username or password' });
          }
          const token = jwt.sign({ email: user.email }, secretKey, );
          res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
    login,
    upload
}