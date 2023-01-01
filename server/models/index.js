const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./users");
db.role = require("./roles");

db.role.estimatedDocumentCount((err, count) => {
    if (!err && count != 3) {
        db.role.findOne({name: 'manager'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "manager"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'manager' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.role.findOne({name: 'livreur'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "livreur"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'livreur' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.role.findOne({name: 'client'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "client"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'client' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })
    }
});
module.exports = db;