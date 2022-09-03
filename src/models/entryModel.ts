import mongoose from "mongoose";



const entrySchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "A Description of the cloth wasnt provided"],
    }, 
    customerName: {
        type: String,
        required: [true, 'A Customer name wasnt provided']
    },
    tailorsName: {
        
        required: [true, 'A tailor should be picked'],
        enum:  ['Ade', 'Emma', 'Andrew', 'Stanley', 'Joe', 'Pat', 'Grace'],
        type: String,
    },
    amount: {
        type: Number,
        default: 4.5,
        required: [true, 'Please provide the amount for the tailor']
        
    },
    day: {
        type: String,
        required: [true, 'The day it was sown is required']
    },
    week: {
        type: Number,
        required: [true, 'The day this piece was made is required']
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
})

export const Entry = mongoose.model('Entry', entrySchema)