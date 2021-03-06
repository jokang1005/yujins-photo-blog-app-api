const Post = require("../models/model")
const auth = require("../auth")
const { Router } = require("express")
const router = Router();
const multer = require("multer")
const mongoose = require("mongoose")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        //rejects storing a file
        cb(null, false);
        return cb(new Error('only .png, .jpg and .jpeg allowed'))
    }
}

const upload = multer();
router.post("/upload", upload.single("file"), function(req,res,next) {
    console.log(req.body)
})
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });
    /*
    stores image in uploads folder using multer and creates a reference to the file
    */

// router.route("/uploadmulter")
//     .post(upload.single('imageData'), (req,res,next) => {
//         console.log(req.body);
//         const newImage = new Image({
//             imageName: req.body.imageName,
//             imageData: req.file.path
//         });
    
//     newImage.save()
//         .then((result) => {
//             console.log(result);
//             res.status(200).json({
//                 success: true,
//                 document: result
//             })
//         })
//         .catch((err) => next(err))
// })

//INDEX//
router.get("/", auth, async (req,res) => {
    try {
        res.status(200).json(await Post.find())
    }
    catch(error) {
        res.status(400).json({error})
    }
})

//CREATE//
router.post("/post", auth, upload.single("file"), async (req,res, next) => {
    try {
        const { username } = req.payload
        req.body.username = username
        res.status(200).json(await Post.create(req.body))
        console.log("hey")
            console.log(req.body)
    }
    catch(error) {
        res.status(400).json({error})
    }
})

//UPDATE//
router.put("/:id", auth, async (req,res) => {
    try {
        const { username } = req.payload
        req.body.username = username
        const {id} = req.params
        res.status(200).json(await Post.findByIdAndUpdate(id, req.body, {new: true}))
    }
    catch(error) {
        res.status(400).json({error})
    }
})

//DELETE//
router.delete("/:id", auth, async (req,res) => {
    try {
        const {id} = req.params
        res.status(200).json(await Post.findByIdAndDelete(id))
    }
    catch(error) {
        res.status(400).json({error})
    }
})

module.exports = router