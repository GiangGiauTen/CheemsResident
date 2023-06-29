function getAllResident(connection, callback) {
  connection.query(
    "SELECT nhan_khau.*, chung_minh_thu.soCMT FROM nhan_khau join chung_minh_thu on nhan_khau.ID = chung_minh_thu.idNhanKhau",
    (error, result) => {
      if (error) {
        callback(error, null)
      } else {
        const promises = result.map((element) => {
          const idNhanKhau = element["ID"]
          return new Promise((resolve, reject) => {
            connection.query(
              "SELECT tuNgay, denNgay, diaChi, ngheNghiep, noiLamViec FROM tieu_su WHERE idNhanKhau = ?",
              [idNhanKhau],
              (error2, result2) => {
                if (error2) {
                  reject(error2)
                } else {
                  element["tieuSu"] = result2
                  resolve(element)
                }
              },
            )
          })
        })
        Promise.all(promises)
          .then((updatedResult) => {
            callback(null, updatedResult)
          })
          .catch((error) => {
            callback(error, null)
          })
      }
    },
  )
}

module.exports = {
  getAllResident: getAllResident,
}
