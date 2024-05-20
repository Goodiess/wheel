import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Admin",
        required: true
    },
    adminProfilePic: {
      type: String,
    },
    text: {
        type: String,
        maxlength: 2020
    },
    img: [{
      type: String
    }],
    name: {
        type: String,
    },
    comment: [
        {
            text: {
                type: String,
                required: true,
          },
          name: {
                type: String,
          },
        }
    ]
},
{
    timestamp: Date
}
)

const Post = mongoose.model("Post",postSchema);

export default Post;