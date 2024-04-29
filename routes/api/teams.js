const router = require("express").Router();
const mongoose = require("mongoose");
const teamSchema = require("../../models/team.schema");
const Teams = mongoose.model("teams", teamSchema);

// Route par défaut
router.get("/", (req, res) => {
  Teams.find()
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
  const newTeam = new Todos(body);
  newTeam
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
  console.log(req);
  res.send("Team deleted");
});
// Route qui modifie une todo
router.patch("/update", (req, res) => {
  console.log(req);
  res.send("Team updated");
});

// Exportation des routes
module.exports = router;
