const router = require("express").Router();
const mongoose = require("mongoose");
const playerSchema = require("./../../models/player.schema");
const Player = mongoose.model("players", playerSchema);

// Route par défaut
router.get("/", (req, res) => {
  Player.find()
    .then((data) => res.status(200).json(data))
    .catch((e) => {
      console.error(e);
      res.send(-1);
    });
});

// Route pour ajouter un todo
router.post("/add", (req, res) => {
  const body = req.body;
  console.log(body);
  const newPlayer = new Player(body);
  newPlayer
    .save()
    .then((t) => {
      console.log(t);
      res.status(200).json(t);
    })
    .catch((e) => {
      console.error(e);
      res.send(-1);
    });
});
// Route qui supprime une todo
router.delete("/delete", (req, res) => {
  const body = req.body;
  const newPlayer = new Player(body);
  console.log(body);
  newPlayer
    .deleteOne({ _id: newPlayer._id })
    .then(() => {
      res.send(body);
      // res.send("Player deleted");
    })
    .catch((e) => console.error(e));
});
// Route qui modifie une todo
router.patch("/update", (req, res) => {
  res.send("Player updated");
});

// Exportation des routes
module.exports = router;
