const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName : { type : String },
  lastName : { type : String },
  employeeCode : { type : Number},
  phone : {type : Number},
  email : { type : String},
   img : {type : String}
})

module.exports = mongoose.model('Employee', employeeSchema);