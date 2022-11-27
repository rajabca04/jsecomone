import mongoose from "mongoose";

// Creted a user schema with mongoose db
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: [50, "Name must be less the 50"]
        }
    }
)

export default userSchema;