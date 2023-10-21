import dao from "./patientDAO"


exports.getAll = (req,res)=>{
    dao.get(req)
    .then(results=>{
        res.send(results)
    })
}

exports.create = (req,res)=>{
    var patient = req.body
    dao.create(patient).then(results=>{
        res.send(results)
    }).catch(err=>res.send(err))
}

exports.update = (req,res)=>{
    var product = {"name":"test",price:1000}
    product.update({"name":req.params.name},product).then(results=>{
        res.send(results)
    })
    var patient = {
        "age": req.body.age
    } 
    dao.update({_id:req.params.id},patient).then(results=>{
        res.send(results)
    })
}

exports.delete = (req,res)=>{
    dao.delete({_id:req.body},(err,result)=>{
        res.send(result)
    })
}