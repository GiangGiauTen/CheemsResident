const express = require("express")
const { getAllMeeting, createNewMeeting } = require("../controller/Meeting/Meeting.js")

const router = express.Router()

module.exports = (connection) => {
  // GET /api/meeting/
  router.get("/", (req, res) => {
    getAllMeeting(connection, (error, result) => {
      if (error) {
        console.error("Error fetching data", error)
        res.status(500).json({ error: "Internal server error" })
      } else {
        res.status(200).json(result)
      }
    })
  })

  router.post("/", (req, res) => {
    result = createNewMeeting(req.body, connection)
    console.log(result)
  })
  return router
}
