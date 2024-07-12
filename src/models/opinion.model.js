import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const opinionsSchema = new mongoose.Schema({
    idOpinion:{
        type: Number,
        unique: true,
        trim: true,
        default: 0
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    showOnMainPage: {
        type: Boolean,
        default: false,
      },
});

opinionsSchema.plugin(AutoIncrement, { inc_field: 'idOpinion'});

export default mongoose.model("Opinions", opinionsSchema)