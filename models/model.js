const { Schema, model } = require("mongoose");

const postSchema = new Schema (
    {
       name: {
           type: String,
           default: "none",
           required: true
       },
       file: {
           type: String,
           required: true
       }
    },
    { timestamps: true}
)

const Post = model("post", postSchema)
module.exports = Post