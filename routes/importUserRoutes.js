const express = require("express");
const user = express();

const multer = require('multer')
const path = require('path');
const bodyParser = require('body-parser');

user.use(bodyParser.urlencoded({extended:true}));
user.use(express.static(path.resolve(__dirname,'pubic')));

var storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,"./pubic/uploads")

    },
    filename:(req,file,cb) =>{
         cb(null,file.originalname)
    }
});

var upload = multer({storage:storage});
const importUsercontroller = require('../controllers/importUserRoutes')
user.post('/importUser',upload.single('file'),importUsercontroller.importUser)
module.exports = user;
