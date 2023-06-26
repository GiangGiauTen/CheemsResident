function getAllMeeting(connection, callback) {
  connection.query(
    "SELECT cuoc_hop.*, nhan_khau.hoTen FROM cuoc_hop join nhan_khau on cuoc_hop.idNguoiTaoCuocHop = nhan_khau.ID",
    (error, result) => {
      if (error) {
        callback(error, null)
      } else {
        const promises = result.map((element) => {
          const idCuocHop = element["ID"]
          return new Promise((resolve, reject) => {
            connection.query(
              "SELECT ID, hoTen, namSinh, gioiTinh FROM tham_gia_cuoc_hop join nhan_khau on tham_gia_cuoc_hop.idNhanKhau = nhan_khau.ID WHERE idCuocHop = ?",
              [idCuocHop],
              (error2, result2) => {
                if (error2) {
                  reject(error2)
                } else {
                  element["nguoiThamGia"] = result2
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
  getAllMeeting: getAllMeeting,
}
