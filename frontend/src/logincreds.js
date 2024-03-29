// My user schema

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema({
  username: String,
  password: String
});

// hash the password - SP3
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid - SP3
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}
var User = mongoose.model('user', userSchema)
module.exports = User




// My APIs for registering and authenticating a user

var User = require('/path/to/user/model')

app.post('/register', function (req, res) {
  var new_user = new User({
    username: req.body.username
  })

  new_user.password = new_user.generateHash(req.body.password)
  new_user.save()
})

app.post('/', function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (!user.validPassword(req.body.password)) {
      //password did not match
    } else {
      // password matched. proceed forward
    }
  })
})
