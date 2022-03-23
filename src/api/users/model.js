import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        req: true
    },
    role: {
        type: String,
        req: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('Users', userSchema)

export default model