const router = require('express').Router();
const { addUser, getUsers } = require("./controller");

router.get("/get", getUsers)
router.post("/add", addUser)

module.exports = router;