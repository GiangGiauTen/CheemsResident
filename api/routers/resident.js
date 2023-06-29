const express = require("express")
const { AddNewResident } = require("../controller/Resident/AddNewResident.js")
const { getAllResident } = require("../controller/Resident/Resident.js")
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

  router.get("/", (req, res) => {
    const result = getAllResident(connection, (error, result) => {
      if (error) {
        console.error("Error fetching data", error)
        res.status(500).json({ error: "Internal server error" })
      } else {
        res.status(200).json(result)
      }
    })
  })

  return router
}
