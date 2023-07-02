const express = require("express");
const { getAllHousehold } = require("../controller/Household/Household.js");
const { createNewHousehold } = require("../controller/Household/Household.js");
const router = express.Router();

module.exports = (connection) => {
    router.get("/", async (req, res) => {
        try {
            const result = await getAllHousehold(connection);
            res.status(200).json(result);
        } catch (error) {
            console.error("Error fetching data", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    router.post("/add", async (req, res) => {
        try {
            const result = await createNewHousehold(req.body, connection);
            res.status(201).json(result);
        } catch (error) {
            console.error("Error creating household", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
};