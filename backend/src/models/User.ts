import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 100,
        unique: true,
    },
    password: { type: String, required: true, minlength: 6, maxlength: 200 },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
