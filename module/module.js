const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    ID:{
        type:string,
        required:true 
    },
    Surname:{
        type:String,
        required:true
    },
    Othername:{
        type:String,
        required:true 
    },
       Gender:{
        type:string,
        required:true
    },
    PhoneNumber:{
        type:string,
        required:true 
    },
    ResidentialAddresss:{
        type:String,
        required:true
    },
    EmergenceContactNumber:{
        type:String,
        required:true
    },
    EmergenceContactPhone:{
        type:String,
        required:true
    },
    EmergenceContactRelationship:{
        type:String,
        required:true
    },





})

const patient= mongoose.model('products',ProductsSchema);
module.exports=Products;