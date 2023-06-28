function getAllResident(connection, callback) {
  connection.query("SELECT * FROM nhan_khau", (error, result) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = {
  getAllResident: getAllResident,
}
