import mongoose from 'mongoose';

const patientsSchema = new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        age:Number,
        clinicals:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Clinicals'
            }
        ] 
    }
)

module.exports = patientsSchema