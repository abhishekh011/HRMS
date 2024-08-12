import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  eid: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  doj: {
    type: String,
  },
  dor: {
    type: String,
    default:0
  },
  department: {
    type: String, 
  },
  salary:{
    type:Number,
    default:null
  },
  image: {
    type: String,
  },
  status:{
    type:String,
    default:null
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
