const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
   title:{
    type: String
   },
   author:{
    type: String
   },
   genre:{
    type: String
   },
   publicationDate:{
    type: String
   },
   createdAt:{
      type: Date
   }
});

module.exports = mongoose.model("book", BookSchema);