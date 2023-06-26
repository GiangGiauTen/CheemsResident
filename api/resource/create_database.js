const mysql = require("mysql")
const connection = require("../config/db")
const fs = require("fs")

const sqlScript = fs.readFileSync("./resource/create_table.sql", "utf8")

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error)
    return
  }
  console.log("Connected to MySQL server!")
})

async function createTables() {
  const newConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "cheemsresident",
  })

  newConnection.connect((error) => {
    if (error) {
      console.error("Error connecting to MySQL:", error)
      return
    }
    console.log("Connected to MySQL server!")
    const queries = sqlScript.split(";").filter((query) => query.trim().length > 0)
    queries.forEach((query) => {
      newConnection.query(query, (error) => {
        if (error) {
          console.error("Error creating tables:", error)
          return
        }
      })
      console.log("Tables created successfully!")
    })
  })
}

function createDatabase() {
  connection.query("DROP DATABASE IF EXISTS cheemsresident", (error) => {
    if (error) {
      console.error("Error deleting old database:", error)
      return
    }
    console.log("Old database deleted successfully!")

    connection.query("CREATE DATABASE cheemsresident", (error) => {
      if (error) {
        console.error("Error creating database:", error)
        return
      }
      console.log("Database created successfully!")
      createTables()
    })
  })
}

createDatabase()
