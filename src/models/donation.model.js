import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const donationSchema = new mongoose.Schema({
    idDonation: { 
        type: Number, 
        unique: true,
        trim: true,
        default: 0
    },

    typeDonation: { 
        type: String, 
        required: true 
    },

    ISBN: { 
        type: Number, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    publisher: { 
        type: String, 
        required: true 
    },
    yearPublication: { 
        type: Number, 
        required: true 
    },
    copies: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: Boolean, 
        required: true, default: false 
    },
});

donationSchema.plugin(AutoIncrement, { inc_field:
    'idDonation' });

export default mongoose.model("Donations", donationSchema);
