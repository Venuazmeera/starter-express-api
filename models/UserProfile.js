//get the reuired libraries
const mongoose= require("mongoose");

// const subObj={
//     streetName:{type: String, required:false},
//     houseNo:{type: String, required: false},
//     city:{type: String, required:false},
//     state:{type: String, required:false},
//     zipCode:{type: String, required:false},
//     landMark:{type: String}


// } 

//define the schema here
const UserProfileSchema = mongoose.Schema({
    //define the object ID
   _id: mongoose.Schema.Types.ObjectId,
   username: { type: String, required: true },//email
   password: { type: String, required: true },
   mobileNo: { type: Number, required: true},
   //img:{ data: Buffer, contentType: String },
//    address:  subObj,
   firstName:  {type:String, required: true},
   lastName:  {type:String, required: true},
   role: {type:String, required: true},
   school: {type: String, required: true},
   emergency: { type: Number, required: true},
   profile: { type: String }
});


//export this mongoose module
module.exports = mongoose.model('UserProfile', UserProfileSchema);