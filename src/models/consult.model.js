import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const consultSchema = new mongoose.Schema({
    idConsult: {
        type: Number,
        unique: true,
        trim: true,
        default: 0 // El valor por defecto se sobrescribirá por el plugin de autoincremento
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    education:{
        type: String,
        required:true,
    },
    occupation:{
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
});

// Aplicar el plugin de autoincremento al esquema
consultSchema.plugin(AutoIncrement, { inc_field: 'idConsult' });

export default mongoose.model("Consults", consultSchema);
