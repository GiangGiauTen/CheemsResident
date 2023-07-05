
async function createNewHouseHold(body, connection) {
    const { maHoKhau, diaChi, ngayLap, chuHo, household } = body;
    console.log(body);/*
    await connection.query(
        "INSERT INTO ho_khau (maHoKhau, idChuHo, diaChi, ngayLap) VALUES (?, ?, ?, ?)",
        [maHoKhau, chuHo, diaChi, ngayLap],
        (err, result) => {
            if (err) {
                console.log(err);
                console.log(idHoKhau, chuHo);
            } else {
                const idHoKhau = result.insertId;

                connection.query(
                    "INSERT INTO thanh_vien_cua_ho (idNhanKhau, idHoKhau, quanHeVoiChuHo) VALUES (?, ?, 'Chủ hộ')",
                    [chuHo, idHoKhau]
                );
                household.members.forEach((resident) => {
                    connection.query(
                        "INSERT INTO thanh_vien_cua_ho (idNhanKhau, idHoKhau, quanHeVoiChuHo) VALUES (?, ?, ?)",
                        [resident.ID, idHoKhau, resident.quanhe]
                    );
                });
            }
        }
    );*/
}


module.exports = {
    createNewHouseHold,
};
