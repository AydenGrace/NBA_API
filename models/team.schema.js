const schema = require("mongoose").Schema;

const teamSchema = schema({
  name: String,
  club: String,
  conference: String,
  liked: { type: Boolean, default: false },
  logo: String,
});

module.exports = teamSchema;
