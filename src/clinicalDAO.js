import mongoose from "mongoose";
import clinicalsSchema from './clinicalModel'

clinicalsSchema.statics ={
    get:function(query,cb){
        return this.find(query,cb)
    },
    create: function(data,cb){
        var clinicalData = new this(data);
        return clinicalData.save(cb);
    }
}

var clinicalModel = mongoose.model("Clinicals",clinicalsSchema,'clinicals')
module.exports = clinicalModel;