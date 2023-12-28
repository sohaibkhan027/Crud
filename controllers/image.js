// const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './photo')
//   },
//   filename: function (req, file, cb) {
//     cb(null,  + Date.now() + file.originalname )
//   }
// })
// const upload = multer({ storage: storage });

// const files =
//   (req,res)=>{
//     const file = req.file
//     console.log(req.file.filename);
//     console.log(req.file.mimetype);
//     if(!file){
//       return res.status(400).send('No image uploaded.')
//     }
//     res.send({
//       filename:"http://localhost:3001/images/" + file.filename,
//       originalname: file.originalname,
//       mimetype: file.mimetype,
//       size: file.size,
//     })
//   }