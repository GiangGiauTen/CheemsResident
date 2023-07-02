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

function createNewMeeting(body, connection) {
  const { maCuocHop, ngayHop, diaDiem, noiDung, nguoiThamGia, idNguoiTaoCuocHop } = body

  const ngayTaoCuocHop = new Date().toLocaleDateString("fr-CA")
  connection.query(
    "INSERT INTO `cuoc_hop` (`maCuocHop`, `ngayHop`, `ngayTaoCuocHop`, `diaDiem`, `noiDung`, `idNguoiTaoCuocHop`) VALUES(?,?,?,?,?,?)",
    [maCuocHop, ngayHop, ngayTaoCuocHop, diaDiem, noiDung, idNguoiTaoCuocHop],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        const idCuocHop = result.insertId // Retrieve the insertId value
        nguoiThamGia.forEach((resident) => {
          connection.query("INSERT INTO `tham_gia_cuoc_hop` (`idNhanKhau`, `idCuocHop`) VALUES(?, ?)", [
            resident.ID,
            idCuocHop,
          ])
        })
      }
    },
  )
}
function deleteMeeting(maCuocHop, connection, callback) {
  connection.beginTransaction((err) => {
    if (err) {
      callback(err);
      return;
    }

    connection.query(
      "DELETE FROM tham_gia_cuoc_hop WHERE idCuocHop = ?",
      [maCuocHop],
      (err, result) => {
        if (err) {
          connection.rollback(() => {
            callback(err);
          });
          return;
        }

        connection.query(
          "DELETE FROM cuoc_hop WHERE maCuocHop = ?",
          [maCuocHop],
          (err, result) => {
            if (err) {
              connection.rollback(() => {
                callback(err);
              });
            } else {
              connection.commit((err) => {
                if (err) {
                  connection.rollback(() => {
                    callback(err);
                  });
                } else {
                  callback(null, result.affectedRows > 0);
                }
              });
            }
          }
        );
      }
    );
  });
}

module.exports = {
  getAllMeeting: getAllMeeting,
  createNewMeeting: createNewMeeting,
  deleteMeeting: deleteMeeting,
};