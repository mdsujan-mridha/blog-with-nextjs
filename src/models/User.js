
import { model, models, Schema } from 'mongoose';

const useSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: [true, 'Email is already exists'],
    },
    image: {
        type: String,

    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        timestamps: true,
    }
)

const User = models.User || model('User', useSchema);
export default User;