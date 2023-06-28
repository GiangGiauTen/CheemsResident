export function TemporaryResidentRegister(body: any, connection: any): boolean {
  const { idNhanKhau, maGiayTamVang, tuNgay, denNgay, lyDo } = body

  const query =
    "INSERT INTO tam_vang(idNhanKhau, maGiayTamVang, noiTamTru, tuNgay, denNgay, lyDo) value (?, ?, ?, ?, ?, ?)"
  connection.query(query, [idNhanKhau, maGiayTamVang, tuNgay, denNgay, lyDo], (error, result) => {
    if (error) {
      console.error(error)
      return false
    }
  })

  return true
}
