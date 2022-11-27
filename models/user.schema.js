import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";

// Creted a user schema with mongoose db
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: [50, "Name must be less the 50"]
        },
        email:{
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        password:{
            type: String,
            required: [true, "Password is required"],
            minLength: [8, "password must be less then 8  characters"],
            select: false
        },
        roel:{
            type: String,
            enum: Object.values(AuthRoles),
            default:AuthRoles.USER
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date,

    },
    {
        timestamps: true
    }
);




export default mongoose.model("User",userSchema);