async function DeathNotify(body, connection, res) {
	const { soGiayKhaiTu, idNguoiKhai, idNguoiChet, ngayKhai, ngayChet, lyDoChet } = body

	if (idNguoiKhai === idNguoiChet) {
		res.status(202).json({ status: 202, message: 'Người chết không thể tự khai tử' })
		return
	}

	const checkQuery1 = `SELECT nhk1.ID FROM nhan_khau n1 JOIN thanh_vien_cua_ho tv1 ON n1.ID = tv1.idNhanKhau
    JOIN nhom_ho_khau nhk1 ON nhk1.idHoKhau = tv1.idHoKhau WHERE n1.ID = ${idNguoiChet}`

	await connection.query(checkQuery1, (error, result) => {
		if (error) {
			console.log(error)
		} else {
			const nhomHoKhauID = result[0].ID
			const checkQuery2 = `SELECT tv.idNhanKhau FROM nhom_ho_khau nhk JOIN ho_khau hk ON nhk.idHoKhau = hk.ID
        JOIN thanh_vien_cua_ho tv ON hk.ID = tv.idHoKhau WHERE nhk.ID = ${nhomHoKhauID}`
			connection.query(checkQuery2, (error, result) => {
				if (error) {
					console.log(error)
				} else {
					const idNguoiThanList = result.map((row) => row.idNhanKhau)
					if ([...idNguoiThanList].indexOf(idNguoiKhai)) {
						res.status(202).json({ status: 202, message: 'Không thể khai tử cho người không có quan hệ' })
						return
					}
					const query = `INSERT INTO khai_tu(soGiayKhaiTu, idNguoiKhai, idNguoiChet, ngayKhai, ngayChet, lyDoChet)
                        VALUES (?, ?, ?, ?, ?, ?)`
					connection.query(
						query,
						[soGiayKhaiTu, idNguoiKhai, idNguoiChet, ngayKhai, ngayChet, lyDoChet],
						(error, result) => {
							if (error) {
								if (error.errno === 1062) {
									res.status(202).json({ status: 202, message: 'Người này đã được khai tử trước đó' })
								} else {
									res.status(500).json({ error: 'Error' })
								}
							} else {
								res.status(200).json({ status: 200, message: 'Khai tử thành công.' })
							}
						},
					)
				}
			})
		}
	})
}

module.exports = {
	DeathNotify: DeathNotify,
}
