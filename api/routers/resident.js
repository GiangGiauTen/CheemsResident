const express = require("express");
const { AddNewResident } = require("../controller/Resident/AddNewResident.js");
const { getAllResident } = require("../controller/Resident/Resident.js");

const router = express.Router();

module.exports = (connection) => {
  // POST /api/resident/add
  router.post("/add", async (req, res) => {
    try {
      await AddNewResident(req.body, connection);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      getAllResident(connection, (error, result) => {
        if (error) {
          console.error("Error fetching data", error);
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json(result);
        }
      });
    } catch (error) {
      console.error("Error fetching data", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};
