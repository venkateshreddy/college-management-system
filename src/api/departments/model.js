import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('Departments', departmentSchema)

export default model