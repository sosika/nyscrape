var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var articleSchema = new Schema({
  // `title` is required and of type String
  _id: {type: Schema.Types.ObjectId, required: true},

  // `url` is required and of type String
  url: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  date: {
    type: Date,
    default: Date.now
  }
},
{_id: false});


// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
