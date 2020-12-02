const route = require("express").Router();

const Feedback = require("./model");

route.get("/",async (req, res) => {
  try {
    const found = await Feedback.find();
    res.json(found);
  } catch (err) {
    console.log(err)
  }

});



route.post("/", async (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  const item = new Feedback({
    name: name,
    score: score
  })
  try {
    const result = await item.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }

});



route.delete("/:id",async (req, res) => {
  const delID = req.params.id
  try {
    const deletedItem = await Feedback.deleteOne({_id: delID});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
