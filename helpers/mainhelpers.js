var db = require('../config/connection')

module.exports={
    addDetails:(info,callback)=>{
        db.get().collection('details').insertOne(info).then((data)=>{
            console.log(data);
            callback(data.insertedId)
        })
    },
    getDetails:()=>{
        return new Promise(async(resolve,reject)=>{
            
            let detail=await db.get().collection('details').find().toArray()
            resolve(detail)
        })
    }
}