var Mongoose = require('./mongodb').Mongoose;
var salt;
var crypto = require('crypto');
//create the schema
var userSchema = new Mongoose.Schema({

	username: {
    type: String,
    required: true
  },
	email: {
    type: String,
    required: true
  },
	password: {
    type: String,
    required: true
  },
	creationDate: {
    type: Date,
    required: true,
    default: Date.now
  },
	vericode: {
		type: String,
	},
	token: {
		type: Number,
		required: true
	},
	fav: [{_id:false, videoId: String, title: String, thumbnailsurl: String}]

});

userSchema.plugin(require('passport-local-mongoose'), {
  usernameField: 'username',
  hashField: 'password',
  usernameLowerCase: true
});

//create the model and add it to the exports
module.exports = Mongoose.model('User', userSchema, 'Users');
