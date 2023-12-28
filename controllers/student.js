const userModel  = require('../models/userData')

const createStudent = async (req,res)=>{
    try{

        const {name,email,contect,gender}= req.body
        // const image = req.file.filename

        console.log("req.body",req.body);
        const data = {
            name,
            email,
            contect,
            gender,
            // image,
            techer:"6572e039530b53544f3177c8"
        }
        console.log("data",data);
    
        const setUser = new userModel(data)
        const savedUser = await setUser.save();
        res.json(savedUser);
    } catch (error) {
      res.status(400).json({ error: error.message});
    }

}

module.exports={
    createStudent
}