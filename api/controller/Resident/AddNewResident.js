async function AddNewResident(body, connection, res) {
	try {
		const {
			hoTen,
			bietDanh,
			namSinh,
			gioiTinh,
			noiSinh,
			nguyenQuan,
			danToc,
			tonGiao,
			quocTich,
			soHoChieu,
			noiThuongTru,
			diaChiHienNay,
			trinhDoHocVan,
			TrinhDoChuyenMon,
			trinhDoNgoaiNgu,
			ngheNghiep,
			noiLamViec,
			idNguoiTao,
			ngayTao,
			soCMT,
		} = body
		const query = `INSERT INTO nhan_khau (hoTen, bietDanh, namSinh, gioiTinh,
    noiSinh, nguyenQuan, danToc, tonGiao, quocTich, soHoChieu, noiThuongTru,
    diaChiHienNay, trinhDoHocVan, TrinhDoChuyenMon, trinhDoNgoaiNgu, 
    ngheNghiep, noiLamViec, idNguoiTao, ngayTao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
		const values = [
			hoTen,
			bietDanh,
			namSinh,
			gioiTinh,
			noiSinh,
			nguyenQuan,
			danToc,
			tonGiao,
			quocTich,
			soHoChieu,
			noiThuongTru,
			diaChiHienNay,
			trinhDoHocVan,
			TrinhDoChuyenMon,
			trinhDoNgoaiNgu,
			ngheNghiep,
			noiLamViec,
			idNguoiTao,
			ngayTao,
		]
		await connection.query(query, values, (error, result) => {
			if (error || result.length === 0) {
				res.status(500).json({ error: 'Error' })
			}
			const residentID = result.insertId
			if (soCMT != null) {
				const query2 = 'INSERT INTO chung_minh_thu(idNhanKhau, soCMT) values (?, ?)'
				connection.query(query2, [residentID, soCMT], (error2, result2) => {
					if (error2 || result2.length === 0) {
						res.status(500).json({ error: 'Error' })
					}
				})
			}
			const query3 = 'INSERT INTO tieu_su(idNhanKhau, diaChi, ngheNghiep, noiLamViec) values (?, ?, ?, ?)'
			connection.query(query3, [residentID, diaChiHienNay, ngheNghiep, noiLamViec], (error3, result3) => {
				if (error3 || result3.length === 0) {
					res.status(500).json({ error: 'Error' })
				}
			})
		})
	} catch (err) {
		res.status(500).json({ error: 'Error' + err })
	}
	res.status(200).json({ message: 'User create successfully' })
}
module.exports = {
	AddNewResident: AddNewResident,
}
