const mongoose = require("mongoose");
console.log("connected to")
mongoose.connect("mongodb+srv://manpreets95828:emitxTE4UhL8JpdB@cluster0.2qcfgv0.mongodb.net/coursera-app")

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstName: String, 
  lastName: String
});

const adminSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstName: String, 
  lastName: String
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number, 
  imageUrl: String, 
  creatorId: ObjectId
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

module.exports = {
  userModel,
  adminModel, 
  courseModel, 
  purchaseModel
}

