export function getAllResident(connection: any) {
  const query = "SELECT * FROM Resident"
  connection.query(query, (error, result) => {
    if (error) {
      console.error(error)
      return false
    }
    return result
  })
}
