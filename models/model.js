const { Schema, model } = require("mongoose");

const postSchema = new Schema (
    {
       imageName: {
           type: String,
           default: "none",
           required: true
       },
       imageData: {
           type: String,
           required: true
       }
    },
    { timestamps: true}
)

const Post = model("post", postSchema)
module.exports = Post