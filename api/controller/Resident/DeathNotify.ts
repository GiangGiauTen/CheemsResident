export function DeathNotify(body: any, connection: any): boolean {
  const { idNhanKhau, lyDo } = body

  const query = "INSERT INTO khai_tu(idNhanKhau, lyDo) VALUES (?, ?)"

  connection.query(query, [idNhanKhau, lyDo], (error, result) => {
    if (error) {
      console.error(error)
      return false
    }
  })

  return true
}
