const userModels = require('../models/userData')
const userVal = require('../models/model')
const multer = require('multer')
const fs = require('fs');

const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './photo')
      },
      filename: function (req, file, cb) {
        cb(null,  + Date.now() + file.originalname )
      }
    })
const upload = multer({ storage: storage });
    
const postData =  async (req,res)=>{
    try {
    console.log(req.body);
    console.log("iamge was",req.file);
    const { name, email,filename } = req.body;
     const  {image} = req.file.filename;
     const teacher_id = req.userData.userData._id
     console.log("token ",req.userData.userData._id);
        const data = {
          name: name,
          email: email,
          filename: filename,
          image: req.file.filename,
          teacher: teacher_id
        }
        console.log("->>>>",teacher_id );
        const newUser = new userModels(data);
        console.log(newUser);
        const savedUser = await newUser.save();
        console.log("id",savedUser);
        res.json(savedUser);
      } catch (error) {
        res.status(400).json({ error: error.message})
      }

}
const getitem = async (req,res)=>{
  const loggedInUserId = req.userData.userData._id
  console.log(req.body)
  const axioData =  await userModels.find({teacher: loggedInUserId});
  console.log("where r u ",loggedInUserId);
  // const axioData =  await userModels.find()
  // console.log("xyz",axioData);
  res.status(200).json({ message: axioData });
    
}

const getData = async (req,res)=>{
  console.log("KKKKKKKKKK",req.params)  
  // const userId = req.body.userId
  const axioData =  await userModels.findById(req.params.id)
  res.status(200).json({ message: axioData });
    
}

const updateData = async (req,res)=>{
  const id=req.params.id
  const {name,password}=req.body.updatedData
  // const image = req.body;
  try{
    // updateField.image = "./photo"
    const axioData =  await userModels.findOneAndUpdate({_id:id},{ name,password }, { new: true })
    res.status(200).json({ message: axioData });
    

  }catch(error) {
    res.status(403).json({ error: error.message}) 
  }
  }

// const updateData = async (req, res) => {
//   const userId = req.params.id;
//   const { name, password } = req.body;
//   const { image } = req.body;

  // try {
  //   let updateFields = { name, password };

  //   if (image) {
  //     const imagePath = await saveImage(image); 
  //     updateFields.image = imagePath;
  //   }

//     const updatedUser = await userModels.findOneAndUpdate({ _id: userId }, {updateFields}, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.status(200).json({ message: 'User updated successfully', user: updatedUser });

//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

const saveImage = async (imageData) => {

  const imagePath = './uploads/' + Date.now() + '.jpg';
  return imagePath;
};


const deleteData = async(req,res)=>{
  console.log(req.params.id);
  const filePath = await userModels.findOne({_id:req.params.id})
  console.log("filep;;;;;;;;llllllllllll",filePath);
  fs.unlink("./photo/" + filePath.image, (err) => {
    if (err) {
        throw err;
    }

    console.log("Delete File successfully.");
});
  const axioData =  await userModels.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: axioData });
}




module.exports = {
  upload,
    getitem,
    postData,
    getData,
    updateData,
    deleteData
}