export function CheckIdentityCard(body: any, connection: any): boolean {
  const { chungMinhThu } = body
  const query =
    "SELECT * FROM nhan_khau LEFT JOIN chung_minh_thu ON nhan_khau.ID = chung_minh_thu.idNhanKhau WHERE soCMT = ?"
  connection.query(query, chungMinhThu, (error, result) => {
    if (error || result.length == 0) {
      return false
    }
  })
  return true
}
