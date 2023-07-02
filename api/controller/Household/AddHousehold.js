
function createNewHouseHold(body, connection) {
    const { maHoKhau, diaChi, ngayLap, chuHo, thanhVien } = body;

    connection.query(
        "INSERT INTO ho_khau (maHoKhau, idChuHo, diaChi, ngayLap) VALUES (?, ?, ?, ?)",
        [maHoKhau, idChuHo, diaChi, ngayLap],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const idHoKhau = result.insertId; // Retrieve the insertId value
                thanhVien.forEach((resident) => {
                    connection.query(
                        "INSERT INTO thanh_vien_cua_ho (idNhanKhau, idHoKhau, quanHeVoiChuHo) VALUES (?, ?, ?)",
                        [resident.idNhanKhau, idHoKhau, resident.quanHeVoiChuHo]
                    );
                });
            }
        }
    );
}


module.exports = {
    createNewHouseHold,
};
