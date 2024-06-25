import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const loansSchema = new mongoose.Schema({
    idLoan: {
        type: Number,
        required: true,
        unique: true,
        default: 0
    },
    ISBN: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    creatdAt: {
        type: Date,
        default: Date.now,
    },
    finalDate: {
        type: Date,
        required: true,
    }
});

loansSchema.plugin(AutoIncrement, { inc_field:
    'idLoan' });

export default mongoose.model("Loans", loansSchema);
