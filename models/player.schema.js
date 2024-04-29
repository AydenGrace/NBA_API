const schema = require("mongoose").Schema;

const playerSchema = schema({
  name: String,
  player: { type: String, default: "No Favorite Player" },
  licensed: { type: Boolean, default: true },
});

module.exports = playerSchema;
