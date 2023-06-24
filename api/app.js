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
//const usersRoute = require("./routers/users")
// Import other route files as needed

// Use the route files
//app.use("/api/users", usersRoute(connection))
// Use other route files as needed

// Start the server
const port = 4001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
