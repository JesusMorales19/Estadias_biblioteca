import mongoose from "mongoose";

const opinionsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        inique: true,
    },
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Opinions", opinionsSchema)