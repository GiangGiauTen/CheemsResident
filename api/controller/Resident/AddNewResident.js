async function AddNewResident(body, connection) {
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
		bietTiengDanToc,
		trinhDoNgoaiNgu,
		ngheNghiep,
		noiLamViec,
		idNguoiTao,
		ngayTao,
		soCMT,
	} = body
	const query = `INSERT INTO nhan_khau (hoTen, bietDanh, namSinh, gioiTinh,
    noiSinh, nguyenQuan, danToc, tonGiao, quocTich, soHoChieu, noiThuongTru,
    diaChiHienNay, trinhDoHocVan, TrinhDoChuyenMon, bietTiengDanToc,
    trinhDoNgoaiNgu, ngheNghiep, noiLamViec, idNguoiTao, ngayTao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
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
		bietTiengDanToc,
		trinhDoNgoaiNgu,
		ngheNghiep,
		noiLamViec,
		idNguoiTao,
		ngayTao,
	]
	await connection.query(query, values, (error, result) => {
		if (error) {
			console.log(error)
			return false
		}
		const residentID = result.insertId
		const query2 = 'INSERT INTO chung_minh_thu(idNhanKhau, soCMT) values (?, ?)'
		connection.query(query2, [residentID, soCMT], (error2, result2) => {
			if (error2) {
				return false
			}
			const query3 = 'INSERT INTO tieu_su(idNhanKhau, diaChi, ngheNghiep, noiLamViec) values (?, ?, ?, ?)'
			connection.query(query3, [residentID, diaChiHienNay, ngheNghiep, noiLamViec])
		})
	})
	return true
}
module.exports = {
	AddNewResident: AddNewResident,
}
