const { Schema, model } = require("mongoose");

const postSchema = new Schema (
    {
        name: String,
        description: String,
        post: { data: Buffer, contentType: String}
    },
    { timestamps: true}
)

const Post = model("post", postSchema)
module.exports = Post