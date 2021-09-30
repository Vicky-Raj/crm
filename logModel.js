const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    manager:String,
    customer:String,
    content:String
})

const Log = mongoose.model("Log",logSchema);

module.exports = Log;