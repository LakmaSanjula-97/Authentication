const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  writerName: { type: String, required: true },
  message: { type: String, required: true },
});

//mongodb data table name
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
