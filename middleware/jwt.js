const userModels = require("../models/model")
const jwt = require('jsonwebtoken');
const secretKey = 'me-nai-batau-ga';


const myMiddleware = async(req, res, next) => {
  const auth = req.headers['authorization'];
  // console.log(auth);
  const token = auth && auth.split(' ')[1];
  console.log(token);
if(!token){
  res.send("invalid user")
}
else{
  try {

    var decoded = jwt.verify(token, secretKey);
    const { email } = decoded;
    const userData = await userModels.findOne({email});
    req.userData = {
     userData
    };
    next();
    console.log("hello jwt",userData);
  } catch(err) {
    res.send("token expire")
  }
}
};
module.exports = {
  myMiddleware
}
