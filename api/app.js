const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "cheemsresident",
})
// Import your route files
const residentRoute = require("./routers/resident")
const meetingRoute = require("./routers/meeting")
// Import other route files as needed

// Use the route files
app.use("/api/resident", residentRoute(connection))
app.use("/api/meeting", meetingRoute(connection))
// Use other route files as needed

// Start the server
const port = 4001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
