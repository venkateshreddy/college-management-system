import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users',
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: [true,"Email must be unique"],
        validate: {
            validator: (value) => {
                return String(value)
                        .toLowerCase()
                        .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
            },
            message: "Please enter valid email"
        }
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Others"]
    },
    branch: {
        type: String,
        required: true,
        enum: ["ECE", "CSE", "EEE", "MECH", "IT"]
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Users'
    }
}, {
    timestamps: true
});

const model = mongoose.model('Students', studentSchema)

export default model