

import  { model, models, Schema } from "mongoose";

const blogSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    meta_description: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: Object, // Tiptap JSON content goes here
        required: true,
    },
  
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    date: {
        type: String,
        default: Date.now,
    }

},
    {
        timestamps: true,
    }
)

const Blogs = models.Blog || model('Blog', blogSchema);
export default Blogs;