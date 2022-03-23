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
    },
    faculty: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Employees'
        }
    ],
    hod: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Employees'
    }
}, {
    timestamps: true
});

const model = mongoose.model('Departments', departmentSchema)

export default model