export class Resident {
  private ID: number
  private maNhanKhau: string
  private hoTen: string
  private bietDanh: string
  private namSinh: Date
  private gioiTinh: string
  private noiSinh: string
  private nguyenQuan: string
  private danToc: string
  private tonGiao: string
  private quocTich: string
  private soHoChieu: string
  private noiThuongTru: string
  private diaChiHienNay: string
  private trinhDoHocVan: string
  private trinhDoChuyenMon: string
  private bietTiengDanToc: string
  private trinhDoNgoaiNgu: string
  private ngheNghiep: string
  private noiLamViec: string
  private tienAnh: string
  private ngayChuyenDen: Date
  private lyDoChuyenDen: string
  private ngayChuyenDi: Date
  private lyDoChuyenDi: string
  private diaChiMoi: string
  private ngayTao: Date
  private idNguoiTao: number
  private ngayXoa: Date
  private idNguoiXoa: number
  private lyDoXoa: string
  private ghiChu: string
  constructor(
    ID: number,
    maNhanKhau: string,
    hoTen: string,
    bietDanh: string,
    namSinh: Date,
    gioiTinh: string,
    noiSinh: string,
    nguyenQuan: string,
    danToc: string,
    tonGiao: string,
    quocTich: string,
    soHoChieu: string,
    noiThuongTru: string,
    diaChiHienNay: string,
    trinhDoHocVan: string,
    trinhDoChuyenMon: string,
    bietTiengDanToc: string,
    trinhDoNgoaiNgu: string,
    ngheNghiep: string,
    noiLamViec: string,
    tienAnh: string,
    ngayChuyenDen: Date,
    lyDoChuyenDen: string,
    ngayChuyenDi: Date,
    lyDoChuyenDi: string,
    diaChiMoi: string,
    ngayTao: Date,
    idNguoiTao: number,
    ngayXoa: Date,
    idNguoiXoa: number,
    lyDoXoa: string,
    ghiChu: string,
  ) {
    this.ID = ID
    this.maNhanKhau = maNhanKhau
    this.hoTen = hoTen
    this.bietDanh = bietDanh
    this.namSinh = namSinh
    this.gioiTinh = gioiTinh
    this.noiSinh = noiSinh
    this.nguyenQuan = nguyenQuan
    this.danToc = danToc
    this.tonGiao = tonGiao
    this.quocTich = quocTich
    this.soHoChieu = soHoChieu
    this.noiThuongTru = noiThuongTru
    this.diaChiHienNay = diaChiHienNay
    this.trinhDoHocVan = trinhDoHocVan
    this.trinhDoChuyenMon = trinhDoChuyenMon
    this.bietTiengDanToc = bietTiengDanToc
    this.trinhDoNgoaiNgu = trinhDoNgoaiNgu
    this.ngheNghiep = ngheNghiep
    this.noiLamViec = noiLamViec
    this.tienAnh = tienAnh
    this.ngayChuyenDen = ngayChuyenDen
    this.lyDoChuyenDen = lyDoChuyenDen
    this.ngayChuyenDi = ngayChuyenDi
    this.lyDoChuyenDi = lyDoChuyenDi
    this.diaChiMoi = diaChiMoi
    this.ngayTao = ngayTao
    this.idNguoiTao = idNguoiTao
    this.ngayXoa = ngayXoa
    this.idNguoiXoa = idNguoiXoa
    this.lyDoXoa = lyDoXoa
    this.ghiChu = ghiChu
  }
  public getID(): number {
    return this.ID
  }

  public setID(ID: number): void {
    this.ID = ID
  }

  public getMaNhanKhau(): string {
    return this.maNhanKhau
  }

  public setMaNhanKhau(maNhanKhau: string): void {
    this.maNhanKhau = maNhanKhau
  }

  public getHoTen(): string {
    return this.hoTen
  }

  public setHoTen(hoTen: string): void {
    this.hoTen = hoTen
  }

  public getBietDanh(): string {
    return this.bietDanh
  }

  public setBietDanh(bietDanh: string): void {
    this.bietDanh = bietDanh
  }

  public getNamSinh(): Date {
    return this.namSinh
  }

  public setNamSinh(namSinh: Date): void {
    this.namSinh = namSinh
  }

  public getGioiTinh(): string {
    return this.gioiTinh
  }

  public setGioiTinh(gioiTinh: string): void {
    this.gioiTinh = gioiTinh
  }

  public getNoiSinh(): string {
    return this.noiSinh
  }

  public setNoiSinh(noiSinh: string): void {
    this.noiSinh = noiSinh
  }

  public getNguyenQuan(): string {
    return this.nguyenQuan
  }

  public setNguyenQuan(nguyenQuan: string): void {
    this.nguyenQuan = nguyenQuan
  }

  public getDanToc(): string {
    return this.danToc
  }

  public setDanToc(danToc: string): void {
    this.danToc = danToc
  }

  public getTonGiao(): string {
    return this.tonGiao
  }

  public setTonGiao(tonGiao: string): void {
    this.tonGiao = tonGiao
  }

  public getQuocTich(): string {
    return this.quocTich
  }

  public setQuocTich(quocTich: string): void {
    this.quocTich = quocTich
  }

  public getSoHoChieu(): string {
    return this.soHoChieu
  }

  public setSoHoChieu(soHoChieu: string): void {
    this.soHoChieu = soHoChieu
  }

  public getNoiThuongTru(): string {
    return this.noiThuongTru
  }

  public setNoiThuongTru(noiThuongTru: string): void {
    this.noiThuongTru = noiThuongTru
  }

  public getDiaChiHienNay(): string {
    return this.diaChiHienNay
  }

  public setDiaChiHienNay(diaChiHienNay: string): void {
    this.diaChiHienNay = diaChiHienNay
  }

  public getTrinhDoHocVan(): string {
    return this.trinhDoHocVan
  }

  public setTrinhDoHocVan(trinhDoHocVan: string): void {
    this.trinhDoHocVan = trinhDoHocVan
  }

  public getTrinhDoChuyenMon(): string {
    return this.trinhDoChuyenMon
  }

  public setTrinhDoChuyenMon(trinhDoChuyenMon: string): void {
    this.trinhDoChuyenMon = trinhDoChuyenMon
  }

  public getBietTiengDanToc(): string {
    return this.bietTiengDanToc
  }

  public setBietTiengDanToc(bietTiengDanToc: string): void {
    this.bietTiengDanToc = bietTiengDanToc
  }

  public getTrinhDoNgoaiNgu(): string {
    return this.trinhDoNgoaiNgu
  }

  public setTrinhDoNgoaiNgu(trinhDoNgoaiNgu: string): void {
    this.trinhDoNgoaiNgu = trinhDoNgoaiNgu
  }

  public getNgheNghiep(): string {
    return this.ngheNghiep
  }

  public setNgheNghiep(ngheNghiep: string): void {
    this.ngheNghiep = ngheNghiep
  }

  public getNoiLamViec(): string {
    return this.noiLamViec
  }

  public setNoiLamViec(noiLamViec: string): void {
    this.noiLamViec = noiLamViec
  }

  public getTienAn(): string {
    return this.tienAnh
  }

  public setTienAn(tienAnh: string): void {
    this.tienAnh = tienAnh
  }

  public getNgayChuyenDen(): Date {
    return this.ngayChuyenDen
  }

  public setNgayChuyenDen(ngayChuyenDen: Date): void {
    this.ngayChuyenDen = ngayChuyenDen
  }

  public getLyDoChuyenDen(): string {
    return this.lyDoChuyenDen
  }

  public setLyDoChuyenDen(lyDoChuyenDen: string): void {
    this.lyDoChuyenDen = lyDoChuyenDen
  }

  public getNgayChuyenDi(): Date {
    return this.ngayChuyenDi
  }

  public setNgayChuyenDi(ngayChuyenDi: Date): void {
    this.ngayChuyenDi = ngayChuyenDi
  }

  public getLyDoChuyenDi(): string {
    return this.lyDoChuyenDi
  }

  public setLyDoChuyenDi(lyDoChuyenDi: string): void {
    this.lyDoChuyenDi = lyDoChuyenDi
  }

  public getDiaChiMoi(): string {
    return this.diaChiMoi
  }

  public setDiaChiMoi(diaChiMoi: string): void {
    this.diaChiMoi = diaChiMoi
  }

  public getNgayTao(): Date {
    return this.ngayTao
  }

  public setNgayTao(ngayTao: Date): void {
    this.ngayTao = ngayTao
  }

  public getIdNguoiTao(): number {
    return this.idNguoiTao
  }

  public setIdNguoiTao(idNguoiTao: number): void {
    this.idNguoiTao = idNguoiTao
  }

  public getNgayXoa(): Date {
    return this.ngayXoa
  }

  public setNgayXoa(ngayXoa: Date): void {
    this.ngayXoa = ngayXoa
  }

  public getIdNguoiXoa(): number {
    return this.idNguoiXoa
  }

  public setIdNguoiXoa(idNguoiXoa: number): void {
    this.idNguoiXoa = idNguoiXoa
  }

  public getLyDoXoa(): string {
    return this.lyDoXoa
  }

  public setLyDoXoa(lyDoXoa: string): void {
    this.lyDoXoa = lyDoXoa
  }

  public getGhiChu(): string {
    return this.ghiChu
  }

  public setGhiChu(ghiChu: string): void {
    this.ghiChu = ghiChu
  }
}
