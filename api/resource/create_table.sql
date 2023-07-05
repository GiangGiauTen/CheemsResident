
-- Cơ sở dữ liệu: `quan_ly_nhan_khau`
--
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chung_minh_thu`
--


-- Cơ sở dữ liệu: `quan_ly_nhan_khau`
--
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chung_minh_thu`
--

CREATE TABLE `chung_minh_thu` (
  `ID` int(11) NOT NULL,
  `idNhanKhau` int(11) DEFAULT NULL,
  `soCMT` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `ngayCap` date DEFAULT NULL,
  `noiCap` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chung_minh_thu`
--

INSERT INTO `chung_minh_thu` (`ID`, `idNhanKhau`, `soCMT`, `ngayCap`, `noiCap`) VALUES
 (1, 1, '439901086933', '2022-04-07', 'Null'),
 (2, 2, '948190282983', '2021-04-17', 'Null'),
(3, 3, '121178797489', '2021-08-06', 'Null'),
(4, 4, '947566598888', '2018-01-19', 'Null'),
(5, 5, '671616700790', '2020-03-16', 'Null'),
 (6, 6, '907866936942', '2023-05-24', 'Null'),
(7, 7, '565757696698', '2019-04-04', 'Null'),
 (8, 8, '630614810033', '2022-04-16', 'Null'),
 (9, 9, '814556963462', '2022-02-22', 'Null'),
 (10, 10, '988704838064', '2021-09-26', 'Null'),
 (11, 11, '996038623414', '2021-10-11', 'Null'),
 (12, 12, '741780180123', '2019-03-18', 'Null'),
 (26, 13, '298044437249', '2019-08-03', 'Null'),
 (13, 26, '000000000001', NULL, NULL),
 (14, 27, '000000000002', NULL, NULL),
 (15, 28, '000000000003', NULL, NULL),
 (16, 29, '000000000004', NULL, NULL),
 (17, 30, '000000000005', NULL, NULL),
 (18, 31, '000000000006', NULL, NULL),
 (19, 32, '000000000007', NULL, NULL),
 (20, 33, '000000000008', NULL, NULL),
 (21, 34, '000000000009', NULL, NULL),
 (22, 35, '100000000001', NULL, NULL),
 (23, 36, '100000000002', NULL, NULL),
 (24, 37, '000000000010', NULL, NULL),
 (25, 38, '000000000011', NULL, NULL),
 (32, 15, '440988767392', '2018-12-13', 'Null'),
(27, 16, '459950729457', '2022-08-08', 'Null'),
(28, 17, '478205179085', '2018-01-03', 'Null'),
(29, 18, '475543355670', '2020-02-29', 'Null'),
(30, 19, '652349806900', '2022-01-31', 'Null'),
(31, 20, '599316072255', '2017-12-13', 'Null');


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dinh_chinh`
--

CREATE TABLE `dinh_chinh` (
  `ID` int(11) NOT NULL,
  `idHoKhau` int(11) DEFAULT NULL,
  `thongTinThayDoi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thayDoiTu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thayDoiThanh` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayThayDoi` date DEFAULT NULL,
  `nguoiThayDoi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ho_khau`
--

CREATE TABLE `ho_khau` (
  `ID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `maHoKhau` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idChuHo` int(11) DEFAULT NULL,
  `maKhuVuc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `diaChi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayLap` date DEFAULT NULL,
  `ngayChuyenDi` date DEFAULT NULL,
  `lyDoChuyen` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `nguoiThucHien` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ho_khau`
--

INSERT INTO `ho_khau` (`ID`, `maHoKhau`, `idChuHo`, `maKhuVuc`, `diaChi`, `ngayLap`, `ngayChuyenDi`, `lyDoChuyen`, `nguoiThucHien`) VALUES
(01, 'TQB006', 01, 'HN03', 'Số 6 Tạ Quang Bửu, quần Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(02, 'TQB007', 05, 'HN03', 'Số 7 Tạ Quang Bửu, quần Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(03, 'TQB008', 09, 'HN03', 'Số 8 Tạ Quang Bửu, quần Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(04, 'TQB009', 14, 'HN03', 'Số 9 Tạ Quang Bửu, quần Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(13, 'TQB002', 28, 'HN03', 'Số 2 Tạ Quang Bửu, quần Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(14, 'TQB001', 26, 'HN03', 'Số 1 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(15, 'TQB003', 29, 'HN03', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL),
(16, 'TQB004', 33, 'HN03', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '2019-12-08', NULL, NULL, NULL);

CREATE TABLE `nhom_ho_khau` (
  `ID` int(11) NOT NULL,
  `idHoKhau` int(11) NOT NULL,
  FOREIGN KEY (`idHoKhau`) REFERENCES `ho_khau`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO  `nhom_ho_khau` (`ID`, `idHoKhau`) VALUES 
(1, 13),
(2, 14),
(2, 15),
(4, 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cuoc_hop`
--
CREATE TABLE `cuoc_hop` (
  `ID` int(11) NOT NULL,
  `maCuocHop` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayHop` date DEFAULT NULL,
  `ngayTaoCuocHop` date DEFAULT NULL,
  `diaDiem` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiDung` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `idNguoiTaoCuocHop` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cuoc_hop`
-- 

INSERT INTO `cuoc_hop` (`ID`, `maCuocHop`, `ngayHop`, `ngayTaoCuocHop`, `diaDiem`, `noiDung`, `idNguoiTaoCuocHop`) VALUES
(01, 'CH001','2023-12-08','2019-12-08','Nhà văn hóa','Hop hoi phu nu', 26),
(02, 'CH002','2023-12-09','2019-12-08','Nhà văn hóa','Phong chong covid', 27),
(03, 'CH003','2023-12-07','2019-12-08','Nhà văn hóa','Xay nha van hoa', 29),
(04, 'CH004','2023-12-03','2019-12-08','Nhà văn hóa','Noi dung', 32),
(05, 'CH005','2023-12-11','2019-12-07','Nhà văn hóa','Họp chi bộ', 14),
(06, 'CH006','2023-12-15','2019-12-06','Nhà văn hóa','Hop Ban ve van de moi trg', 6),
(07, 'CH007','2023-12-17','2019-12-09','Nhà văn hóa','Phong chong te nan xa hoi', 17),
(08, 'CH008','2023-12-18','2019-12-03','Nhà văn hóa','Xay nha cho ng ngheo', 5),
(09, 'CH009','2023-12-20','2019-12-03','Nhà văn hóa','Noi dung A', 3),
(10, 'CH0010','2023-12-25','2019-12-03','Nhà văn hóa','Noi dung B', 1);


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tham_gia_cuoc_hop`
--
CREATE TABLE `tham_gia_cuoc_hop` (
  `idNhanKhau` int(11) NOT NULL,
  `idCuocHop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tham_gia_cuoc_hop`
--

INSERT INTO `tham_gia_cuoc_hop` (`idNhanKhau`, `idCuocHop`) VALUES
(26, 01),
(27, 02),
(29, 03),
(30, 04),
(31, 05),
(32, 06),
(33, 07),
(34, 08),
(35, 09),
(36, 10);


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khai_tu`
--

CREATE TABLE `khai_tu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `soGiayKhaiTu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idNguoiKhai` int(11) DEFAULT NULL,
  `idNguoiChet` int(11) DEFAULT NULL UNIQUE,
  `ngayKhai` date DEFAULT NULL,
  `ngayChet` date DEFAULT NULL,
  `lyDoChet` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhan_khau`
--

CREATE TABLE `nhan_khau` (
  `ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `maNhanKhau` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hoTen` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bietDanh` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `namSinh` date DEFAULT NULL,
  `gioiTinh` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiSinh` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nguyenQuan` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `danToc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tonGiao` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quocTich` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `soHoChieu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiThuongTru` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `diaChiHienNay` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trinhDoHocVan` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TrinhDoChuyenMon` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bietTiengDanToc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trinhDoNgoaiNgu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngheNghiep` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiLamViec` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tienAn` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayChuyenDen` date DEFAULT NULL,
  `lyDoChuyenDen` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayChuyenDi` date DEFAULT NULL,
  `lyDoChuyenDi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `diaChiMoi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngayTao` date DEFAULT NULL,
  `idNguoiTao` int(11) DEFAULT NULL,
  `ngayXoa` date DEFAULT NULL,
  `idNguoiXoa` int(11) DEFAULT NULL,
  `lyDoXoa` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ghiChu` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhan_khau`
--

INSERT INTO `nhan_khau` (`ID`, `maNhanKhau`, `hoTen`, `bietDanh`, `namSinh`, `gioiTinh`, `noiSinh`, `nguyenQuan`, `danToc`, `tonGiao`, `quocTich`, `soHoChieu`, `noiThuongTru`, `diaChiHienNay`, `trinhDoHocVan`, `TrinhDoChuyenMon`, `bietTiengDanToc`, `trinhDoNgoaiNgu`, `ngheNghiep`, `noiLamViec`, `tienAn`, `ngayChuyenDen`, `lyDoChuyenDen`, `ngayChuyenDi`, `lyDoChuyenDi`, `diaChiMoi`, `ngayTao`, `idNguoiTao`, `ngayXoa`, `idNguoiXoa`, `lyDoXoa`, `ghiChu`) VALUES
(1, NULL, 'Đào Duy Thái', '', '1986-01-07', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Tiến sĩ', 'Không', 'Anh trình độ A', 'Giáo Viên', 'Trường THCS Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-03', 1, NULL, NULL, NULL, NULL),
(2, NULL, 'Lê Thị Duyên', '', '1988-01-03', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 6 Đường Hoàng Mai, Hai Bà Trưng, Hà Nội', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Cử Nhân', 'Không', 'Anh trình độ C ', 'Kế Toán', 'Cty kinh tê ABC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(3, NULL, 'Đào Thị Hồng', '', '2009-07-23', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', Null, 'Không', Null, 'học sinh', 'Trường THCS Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(4, NULL, 'Đào Tiến Dũng', '', '2001-11-05', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 6 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Sinh Viên', 'Không', 'Không', 'Sinh Viên', 'Đại học bách khoa hà nội', NULL, NULL, NULL, NULL, NULL, NULL, '2019-01-08', 1, NULL, NULL, NULL, NULL),
(5, NULL, 'Hoàng Văn Chương', '', '1984-02-06', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', "Không", 'Không', Null, 'Công Nhân', 'Tại gia', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-03', 1, NULL, NULL, NULL, NULL),
(6, NULL, 'Nguyễn Thị Mỹ Linh', '', '1984-2-03', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 7 Đường Hoàng Mai, Hai Bà Trưng, Hà Nội', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Cử Nhân', 'Không', 'Anh trình độ A ', 'Ngân Hàng', 'Ngân hàng kinh tê ABC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(7, NULL, 'Hoàng Mạnh Hùng', '', '2005-4-22', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', Null, 'Không', Null, 'học sinh', 'Trường THPT Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(8, NULL, 'Hoàng Tiến Hưng', '', '2001-12-02', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 7 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Sinh Viên', 'Không', 'Không', 'Sinh Viên', 'Đại học Quốc Gia Hà Nội', NULL, NULL, NULL, NULL, NULL, NULL, '2019-2-08', 1, NULL, NULL, NULL, NULL),
(9, NULL, 'Trần Bình Trọng', '', '2000-3-3', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '/12 chính quy', 'Không', 'Không', 'Anh trình độ D', 'Giảng viên đại học', 'Đại học Bách khoa Hà Nội', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(10, NULL, 'Nguyễn Thị Tuyết', '', '2002-09-02', 'Nữ', NULL, 'Nam Định', 'Kinh', 'Không', 'Việt Nam', '', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '9/12 chính quy', 'Không', 'Không', 'Anh trình độ D', 'Công Nhân', 'Công ty may sông hồng', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(11, NULL, 'Trần Hữu Sơn', '', '2018-12-25', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '0/12 chính quy', 'Không', 'Không', 'Không', 'Học sin', 'Trường Mầm non Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(12, NULL, 'Trần Thị Mai', '', '2023-11-15', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 8 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '0/12 chính quy', 'Không', 'Không', 'Không', Null, Null, NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(13, NULL, 'Đào Thị Hồng', '', '2009-07-23', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 8 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 8 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', Null, 'Không', Null, 'học sinh', 'Trường THCS Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(14, NULL, 'Lưu Quang Vũ', '', '1945-11-12', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Tiến sĩ', 'Có', 'Anh trình độ A','Nhà văn', 'Nhà Xuất bản Mặt trời', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(15, NULL, 'Hồ Thị Hương', '', '1950-12-04', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Không', 'Không', 'Không', 'Không', 'Tại gia', NULL, NULL, NULL, NULL, NULL, NULL, '1998-08-02', 1, NULL, NULL, NULL, NULL),
(16, NULL, 'Lưu Minh Vũ', '', '1984-03-11', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', "Không", 'Không', Null, 'Nhạc sĩ', 'Tại gia', NULL, NULL, NULL, NULL, NULL, NULL, '1998-08-02', 1, NULL, NULL, NULL, NULL),
(17, NULL, 'Trần Thị Mỹ Duyên', '', '1984-02-03', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Đường Hoàng Mai, Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Cử Nhân', 'Không', 'Anh trình độ A ', 'Nhà Văn', 'Tại Gia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(18, NULL, 'Lưu Mạnh Tiến', '', '2003-4-22', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', Null, 'Không', Null, 'sinh viên', 'Đại Học Sân Khấu điện Ảnh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL),
(19, NULL, 'Lưu Văn Hoàng Thiên', '', '2001-12-02', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Sinh Viên', 'Không', 'Không', 'Sinh Viên', 'Đại học Y Hà Nội', NULL, NULL, NULL, NULL, NULL, NULL, Null, 1, NULL, NULL, NULL, NULL),
(20, NULL, 'Lưu Thùy Chinh', '', '2000-3-3', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 9 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 9 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Không', 'Không', 'Anh trình độ D', 'Giảng viên đại học', 'Đại học Bách khoa Hà Nội', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(21, NULL, 'Nguyễn Ngọc Chí', '', '2002-09-02', 'Nữ', NULL, 'Nam Định', 'Kinh', 'Không', 'Việt Nam', '', 'Số 10 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 10 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '9/12 chính quy', 'Không', 'Không', 'Anh trình độ D', 'Công Nhân', 'Công ty may sông hồng', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(22, NULL, 'Trần Hữu Sơn', '', '2018-12-25', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 10 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 10 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '0/12 chính quy', 'Không', 'Không', 'Không', 'Học sin', 'Trường Mầm non Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(26, NULL, 'Trinh Văn An', '', '1990-12-07', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 1 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', 'Số 1 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Thạc sĩ', 'Không', 'Anh trình độ B', 'Giáo Viên', 'Trường THCS Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(27, NULL, 'Trần Thanh Duyên', '', '1997-12-23', 'Nữ', NULL, 'Hải Phòng', 'Kinh', 'Không', 'Việt Nam', '', 'Số 3, đường Đình Đông, phường Đình Đông, quận Ngô Quyền, Hải Phòng', 'Số 2 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Thạc sĩ', 'Không', 'Anh trình độ D', 'Nhân viên văn phòng', 'Công ty ABC', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(28, NULL, 'Nguyễn Minh Quân', '', '1995-05-31', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 2 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 2 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Thạc sĩ', 'Không', 'Anh trình độ D', 'Kỹ sư', 'Viettel', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(29, NULL, 'Nguyễn Tiến Dũng', '', '1964-06-03', 'Nam', NULL, 'Hải Dương', 'Kinh', 'Thiên chúa giáo', 'Việt Nam', '', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Kỹ sư', 'Không', 'Không', 'Phó giám đốc', 'Công ty EXE', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(30, NULL, 'Vũ Mỹ Linh', '', '1965-12-06', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12', 'Cử Nhân', 'Không', 'Không', 'Nội trợ', 'Tại nhà', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(31, NULL, 'Nguyễn Tiến Đạt', '', '1990-09-09', 'Nam', NULL, 'Hải Dương', 'Kinh', 'Thiên chúa giáo', 'Việt Nam', '', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Kỹ sư', 'không', 'Anh trình độ C', 'Kỹ sư điện', 'Công ty điện EVN', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(32, NULL, 'Nguyễn Trà My', '', '1997-12-12', 'Nữ', NULL, 'Hải Dương', 'Kinh', 'Thiên chúa giáo', 'Việt Nam', '', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Thạc sĩ', 'không', 'Anh trình đố D', 'Luật sư', 'Văn phòng luật sư 123', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(33, NULL, 'Trần Văn Nam', '', '1980-07-09', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Tiến sĩ', 'Không', 'Anh trình độ D', 'Giảng viên đại học', 'Đại học Bách khoa Hà Nội', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(34, NULL, 'Nguyễn Minh Tuyết', '', '1985-09-02', 'Nữ', NULL, 'Nam Định', 'Kinh', 'Không', 'Việt Nam', '', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '12/12 chính quy', 'Thạc sĩ', 'Không', 'Anh trình độ D', 'Bác sĩ', 'Bệnh viện quốc tế HJK', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(35, NULL, 'Trần Trung Kiên', '', '2008-12-25', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '6/12 chính quy', 'Không', 'Không', 'Không', 'Học sinh', 'Trường THCS Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(36, NULL, 'Trần Thúy Ngọc', '', '2013-01-15', 'Nữ', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '1/12 chính quy', 'Không', 'Không', 'Không', 'Học sinh', 'Trường tiểu học Chu Văn An', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(37, NULL, 'Lý Văn Công', '', '1945-06-04', 'Nam', NULL, 'Hà Nội', 'Kinh', 'Không', 'Việt Nam', '', 'Số 5 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 5 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '10/12 chính quy', 'Không', 'Không', 'Không', 'Về hưu', 'Không', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL),
(38, NULL, 'Bùi Thị Hà', '', '1948-02-03', 'Nữ', NULL, 'Hải Phòng', 'Kinh', 'Không', 'Việt Nam', '', 'Số 5 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Số 5 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', '10/12', 'Không', 'Không', 'Không', 'Nội trợ', 'Tại nhà', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-08', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tam_tru`
--

CREATE TABLE `tam_tru` (
  `ID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `hoTen` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `soCmt` int(11) DEFAULT NULL,
  `maGiayTamtru` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `diaChiTamTru` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `soDienThoaiNguoiDangKy` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tuNgay` date NOT NULL,
  `denNgay` date NOT NULL,
  `lyDo` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tam_vang`
--

CREATE TABLE `tam_vang` (
  `ID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `idNhanKhau` int(11) DEFAULT NULL,
  `maGiayTamVang` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiTamtru` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tuNgay` date DEFAULT NULL,
  `denNgay` date DEFAULT NULL,
  `lyDo` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanh_vien_cua_ho`
--

CREATE TABLE `thanh_vien_cua_ho` (
  `idNhanKhau` int(11) NOT NULL,
  `idHoKhau` int(11) NOT NULL,
  `quanHeVoiChuHo` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thanh_vien_cua_ho`
--

INSERT INTO `thanh_vien_cua_ho` (`idNhanKhau`, `idHoKhau`, `quanHeVoiChuHo`) VALUES
(14,4,'Chủ Hộ'),
(15,4,'Vợ'),
(16,4,'Con Trai'),
(17,4,'Con Dâu'),
(18,4,'Cháu Gái'),
(19,4,'Cháu Trai'),
(20,4,'Cháu Gái'),
(13,3,'Con Gái Nuôi'),
(9,3,'Chủ Hộ'),
(10,3,'Vợ'),
(11,3,'Con Trai'),
(12,3,'Con Gái'),
(5,2,'Chủ Hộ'),
(6,2,'Vợ'),
(7,2,'Con Trai'),
(8,2,'Con Trai'),
(1,1,'Chủ Hộ'),
(2,1,'Vợ'),
(3,1,'Con gái'),
(4,1,'Con Trai'),
(26, 14, 'Chủ hộ'),
(27, 13, 'Vợ'),
(29, 15, 'Chủ hộ'),
(30, 15, 'Vợ'),
(31, 15, 'Con trai'),
(32, 15, 'Con gái'),
(33, 16, 'Chủ hộ'),
(34, 16, 'Vợ'),
(35, 16, 'Con trai'),
(36, 16, 'Con gái');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tieu_su`
--

CREATE TABLE `tieu_su` (
  `ID` int(11) NOT NULL,
  `idNhanKhau` int(11) DEFAULT NULL,
  `tuNgay` date DEFAULT NULL,
  `denNgay` date DEFAULT NULL,
  `diaChi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngheNghiep` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noiLamViec` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tieu_su`
--

INSERT INTO `tieu_su` (`ID`, `idNhanKhau`, `tuNgay`, `denNgay`, `diaChi`, `ngheNghiep`, `noiLamViec`) VALUES
(2, 27, '2015-09-05', '2015-09-05', 'Số 45, ngõ 56, Nguyễn Khang, Cầu Giấy, Hà Nội', 'Sinh Viên', 'Đại học Thương mại'),
(3, 28, '2012-09-05', '2017-09-05', '556 La Thành, Hà Nội', 'Sinh Viên', 'Đại học Bách khoa Hà Nội'),
(4, 29, '1989-05-10', '2000-08-25', 'Số 5 Nguyễn Khuyến, Hà Nội', 'Quản lý nhận sự', 'Công ty BCC'),
(5, 30, '1987-05-23', '1997-03-01', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Nhân viên văn phòng', 'Công ty Zezs'),
(6, 31, '2008-09-05', '2013-09-05', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Sinh viên', 'Đại học Bách khoa Hà Nội'),
(7, 32, '2015-09-05', '2019-09-05', 'Số 3 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Sinh viên', 'Đại học Luật Hà Nội'),
(8, 33, '1998-09-05', '2003-09-05', 'Số 66, ngõ 445 Nguyễn Khang, Cầu Giấy, Hà Nội', 'Sinh Vvên', 'Đại học Bách khoa Hà Nội'),
(9, 33, '2003-10-03', '2018-08-06', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Giảng viên', 'Đại học Công ngiệp Hà Nội'),
(10, 1, '2003-09-05', '2011-02-03', 'Số 8 Khâm Thiên Đống Đa Hà Nội', 'Sinh viên', 'Đại học Thủy lợi'),
(11, 2, '2011-10-03', '2015-02-01', 'Số 18 Định Công, Hà Nội', 'Bác sĩ nội trú', 'Bệnh viện Thanh Nhàn'),
(12, 3, '1961-01-01', '1963-01-01', 'Không rõ', 'Bộ đội', 'Hà Nội'),
(13, 4, '2015-09-05', '2015-09-05', 'Số 23, ngõ 56, Xuân thủy, Cầu Giấy, Hà Nội', 'Sinh Viên', 'Đại học Sư Phạm'),
(14, 5, '2012-09-05', '2017-09-05', '556 La Thành, Hà Nội', 'Sinh Viên', 'Đại học Bách khoa Hà Nội'),
(15, 6, '1989-05-10', '2000-08-25', 'Số 5 Nguyễn Khuyến, Hà Nội', 'Quản lý nhận sự', 'Công ty BCC'),
(16, 7, '1987-05-23', '1997-03-01', 'Số 10 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Nhân viên Tiệm sách', 'Công ty Zezs'),
(17, 8, '2008-09-05', '2013-09-05', 'Số 12 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Sinh viên', 'Đại học Bách khoa Hà Nội'),
(18, 9, '2015-09-05', '2019-09-05', 'Số 13 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Sinh viên', 'Đại học Luật Hà Nội'),
(19, 10, '1998-09-05', '2003-09-05', 'Số 66, ngõ 445 Nguyễn Khang, Cầu Giấy, Hà Nội', 'Sinh Vvên', 'Đại học Bách khoa Hà Nội'),
(20, 11, '2003-10-03', '2018-08-06', 'Số 4 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội', 'Giảng viên', 'Đại học Công ngiệp Hà Nội'),
(21, 12, '2003-09-05', '2011-09-05', 'Số 8 Tôn Thất Tùng, Hà Nội', 'Sinh viên', 'Đại học Y Hà Nội'),
(22, 13, '2011-10-03', '2015-08-09', 'Số 8 Tôn Thất Tùng, Hà Nội', 'Bác sĩ nội trú', 'Bệnh viện Bạch Mai'),
(23, 14, '1979-01-01', '1990-01-01', 'Không rõ', 'Công Nhân', 'Hà Nội');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `userName` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `passwd` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`ID`, `userName`, `passwd`) VALUES
(1, 'admin', '1');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chung_minh_thu`
--
ALTER TABLE `chung_minh_thu`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `idNhanKhau` (`idNhanKhau`);
ALTER TABLE `chung_minh_thu` ADD FULLTEXT KEY `soCMT` (`soCMT`);

--
-- Chỉ mục cho bảng `dinh_chinh`
--
ALTER TABLE `dinh_chinh`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `idHoKhau` (`idHoKhau`),
  ADD KEY `nguoiThayDoi` (`nguoiThayDoi`);


--
-- Chỉ mục cho bảng `ho_khau`
--
ALTER TABLE `ho_khau`
  ADD KEY `idChuHo` (`idChuHo`);
ALTER TABLE `ho_khau` ADD FULLTEXT KEY `maHoKhau` (`maHoKhau`);

--
-- Chỉ mục cho bảng `cuoc_hop`
--
ALTER TABLE `cuoc_hop`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `idNguoiTaoCuocHop` (`idNguoiTaoCuocHop`);
ALTER TABLE `cuoc_hop` ADD FULLTEXT KEY `maCuocHop` (`maCuocHop`);


--
-- Chỉ mục cho bảng `nhan_khau`
--
ALTER TABLE `nhan_khau`
  ADD KEY `idNguoiTao` (`idNguoiTao`),
  ADD KEY `idNguoiXoa` (`idNguoiXoa`);
ALTER TABLE `nhan_khau` ADD FULLTEXT KEY `hoTen` (`hoTen`,`bietDanh`);

--
-- Chỉ mục cho bảng `thanh_vien_cua_ho`
--
ALTER TABLE `thanh_vien_cua_ho`
  ADD PRIMARY KEY (`idNhanKhau`,`idHoKhau`),
  ADD KEY `idHoKhau` (`idHoKhau`);

--
-- Chỉ mục cho bảng `tham_gia_cuoc_hop`
--
ALTER TABLE `tham_gia_cuoc_hop`
  ADD PRIMARY KEY (`idNhanKhau`,`idCuocHop`),
  ADD KEY `idCuocHop` (`idCuocHop`);

--
-- Chỉ mục cho bảng `tieu_su`
--
ALTER TABLE `tieu_su`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `idNhanKhau` (`idNhanKhau`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chung_minh_thu`
--
ALTER TABLE `chung_minh_thu`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `dinh_chinh`
--
ALTER TABLE `dinh_chinh`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


--
-- AUTO_INCREMENT cho bảng `cuoc_hop`
--
ALTER TABLE `cuoc_hop`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `nhan_khau`
--
ALTER TABLE `nhan_khau`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `tieu_su`
--
ALTER TABLE `tieu_su`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chung_minh_thu`
--
ALTER TABLE `chung_minh_thu`
  ADD CONSTRAINT `chung_minh_thu_ibfk_1` FOREIGN KEY (`idNhanKhau`) REFERENCES `nhan_khau` (`ID`);

--
-- Các ràng buộc cho bảng `dinh_chinh`
--
ALTER TABLE `dinh_chinh`
  ADD CONSTRAINT `dinh_chinh_ibfk_1` FOREIGN KEY (`idHoKhau`) REFERENCES `ho_khau` (`ID`),
  ADD CONSTRAINT `dinh_chinh_ibfk_2` FOREIGN KEY (`nguoiThayDoi`) REFERENCES `users` (`ID`);

--
-- Các ràng buộc cho bảng `ho_khau`
--
ALTER TABLE `ho_khau`
  ADD CONSTRAINT `ho_khau_ibfk_1` FOREIGN KEY (`idChuHo`) REFERENCES `nhan_khau` (`ID`);

--
-- Các ràng buộc cho bảng `cuoc_hop`
--
ALTER TABLE `cuoc_hop`
  ADD CONSTRAINT `cuoc_hop_ibfk_1` FOREIGN KEY (`idNguoiTaoCuocHop`) REFERENCES `nhan_khau` (`ID`);

--
-- Các ràng buộc cho bảng `khai_tu`
--
ALTER TABLE `khai_tu`
  ADD CONSTRAINT `khai_tu_ibfk_1` FOREIGN KEY (`idNguoiKhai`) REFERENCES `nhan_khau` (`ID`),
  ADD CONSTRAINT `khai_tu_ibfk_2` FOREIGN KEY (`idNguoiChet`) REFERENCES `nhan_khau` (`ID`);

--
-- Các ràng buộc cho bảng `nhan_khau`
--
ALTER TABLE `nhan_khau`
  ADD CONSTRAINT `nhan_khau_ibfk_1` FOREIGN KEY (`idNguoiTao`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `nhan_khau_ibfk_2` FOREIGN KEY (`idNguoiXoa`) REFERENCES `users` (`ID`);

--
-- Các ràng buộc cho bảng `tam_vang`
--
ALTER TABLE `tam_vang`
  ADD CONSTRAINT `tam_vang_ibfk_1` FOREIGN KEY (`idNhanKhau`) REFERENCES `nhan_khau` (`ID`);

--
-- Các ràng buộc cho bảng `thanh_vien_cua_ho`
--
ALTER TABLE `thanh_vien_cua_ho`
  ADD CONSTRAINT `thanh_vien_cua_ho_ibfk_1` FOREIGN KEY (`idNhanKhau`) REFERENCES `nhan_khau` (`ID`),
  ADD CONSTRAINT `thanh_vien_cua_ho_ibfk_2` FOREIGN KEY (`idHoKhau`) REFERENCES `ho_khau` (`ID`);
  
--
-- Các ràng buộc cho bảng `tham_gia_cuoc_hop`
--
ALTER TABLE `tham_gia_cuoc_hop`
  ADD CONSTRAINT `tham_gia_cuoc_hop_ibfk_1` FOREIGN KEY (`idNhanKhau`) REFERENCES `nhan_khau` (`ID`),
  ADD CONSTRAINT `tham_gia_cuoc_hop_ibfk_2` FOREIGN KEY (`idCuocHop`) REFERENCES `cuoc_hop` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `tieu_su`
--
ALTER TABLE `tieu_su`
  ADD CONSTRAINT `tieu_su_ibfk_1` FOREIGN KEY (`idNhanKhau`) REFERENCES `nhan_khau` (`ID`);
COMMIT;
