import dao from './clinicalDAO'
const { ObjectId } = require('mongodb');



exports.getAll = (req,res)=>{
    dao.get({patient:new ObjectId(req.params.patientId)}).then(results=>{
        res.send(results)
    })
}

// dao.create(patient).then(results=>{
//     res.send(results)
// }).catch(err=>res.send(err))

exports.create = (req,res)=>{
    var clinicals = req.body
    dao.create(clinicals)
        .then(results => {
            res.send(results);
        })
        .catch(err => {
            res.status(500).send("Error creating clinical record");
        });
    
}
