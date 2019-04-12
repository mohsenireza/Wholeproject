const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    like: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    replyTo: {
        type: Schema.type.ObjectId,
        ref: 'posts'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('posts', postSchema);
