import mongoose from "mongoose";
import patientSchema from './patientModel'

patientSchema.statics ={
    get:function(){
        return this.find().exec();
    },
    create: function(data,cb){
        var patient = new this(data);
        return patient.save(cb);
    },
    update:function(query,updateData,cb){
        return this.findOneAndUpdate(query,{$set:updateData},cb);
    },
    delete:function(query,cb){
        return this.findOneAndDelete(query,cb)
    }
}


var patientModel = mongoose.model("Patient",patientSchema,'patient')
module.exports = patientModel;