import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["instructor" , "student" , "admin" , "instructoradmin"],
        default: 'student',
        required: true,
    },
    institutionId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institution" 
    },
    enrolledCourses: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
        }
    ],
    photoUrl: {
        type: String,
        default:""
    }
} ,
{timestamps: true});

export const User = mongoose.model('user' , userSchema);
