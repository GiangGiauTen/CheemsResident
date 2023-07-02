const express = require("express");
const {
  getAllMeeting,
  createNewMeeting,
  deleteMeeting, 
} = require("../controller/Meeting/Meeting.js");

const router = express.Router();

module.exports = (connection) => {
  // GET /api/meeting/
  router.get("/", (req, res) => {
    getAllMeeting(connection, (error, result) => {
      if (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(result);
      }
    });
  });

  router.post("/", (req, res) => {
    createNewMeeting(req.body, connection);
    res.status(201).json({ message: "Meeting created successfully" });
  });

  // DELETE /api/meeting/:maCuocHop
  router.delete("/:maCuocHop", (req, res) => {
    const maCuocHop = req.params.maCuocHop;
    deleteMeeting(maCuocHop, connection, (error, result) => {
      if (error) {
        console.error("Error deleting meeting", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (result) {
          res.json({ success: true, message: "Meeting deleted successfully" });
        } else {
          res.status(404).json({ error: "Meeting not found" });
        }
      }
    });
  });

  return router;
};
