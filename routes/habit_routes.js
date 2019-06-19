const express = require("express");
const router = express.Router();
const HabitController = require("./../controllers/habit_controller");

router.get("/", HabitController.index);

router.post("/", HabitController.create);

router.get("/new", HabitController.make);

router.get("/:id", HabitController.show);

router.delete("/:id", HabitController.destroy);

router.put("/:id", HabitController.update);

router.patch("/:id", HabitController.update);

router.get("/:id/edit", HabitController.edit);

module.exports = router;