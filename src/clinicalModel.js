import mongoose from "mongoose";

var clinicalSchema = new mongoose.Schema({
    componentName:String,
    componentValue:String,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
})

module.exports = clinicalSchema