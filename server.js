const express = require('express')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

const PORT = process.env.PORT || 3000;
const app = express()


// Write an end point to upload multiport data to the backend part and store files inside the uploads folder of the projects. - done
app.post('/', upload.array('files'), function (req, res, next) {
    res.send({message: 'file(s) uploaded successfully'})
  })

// Write an endpoint which has multiple options like direct file download or handover the file data to frontend to do operation - partially
app.get('/download', function(req, res){
  const file = `${__dirname}/uploads/${req.query.fileName}`;
  res.download(file) // Set disposition and send it.
});


app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
