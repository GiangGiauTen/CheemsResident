const express = require("express")
const { AddNewResident } = require("../controller/Resident/AddNewResident.ts")
const router = express.Router()

module.exports = (connection) => {
  // POST /api/resident/add
  router.post("/add", (req, res) => {
    const result = AddNewResident(req.body, connection)
    if (result === true) {
      res.status(201).json("User created successfully")
    } else {
      console.error("Error creating user:", error)
      res.status(500).json({ error: "Internal server error" })
    }
  })

  return router
}
