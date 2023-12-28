const userModels = require("../models/model")

const jwt = require('jsonwebtoken');
const secretKey = 'me-nai-batau-ga';

const getData = async(req,res)=>{
    console.log("hello userController",req.userData);

    try {
        res.send(req.userData)
      } catch(err) {
        console.log(err);
      }


}
module.exports = {
    getData
}