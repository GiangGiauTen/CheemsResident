export class HouseHold {
  private ID: number
  private maHoKhau: string
  private idChuHo: number
  private maKhuVuc: string
  private diaChi: string
  private ngayLap: Date
  private ngayChuyDi: Date
  private lyDoChuyen: string
  private nguoiThucHien: number
  private soLanThamGiaHop: number

  public getID(): number {
    return this.ID
  }

  public setID(ID: number): void {
    this.ID = ID
  }

  public getMaHoKhau(): string {
    return this.maHoKhau
  }

  public setMaHoKhau(maHoKhau: string): void {
    this.maHoKhau = maHoKhau
  }

  public getIdChuHo(): number {
    return this.idChuHo
  }

  public setIdChuHo(idChuHo: number): void {
    this.idChuHo = idChuHo
  }

  public getMaKhuVuc(): string {
    return this.maKhuVuc
  }

  public setMaKhuVuc(maKhuVuc: string): void {
    this.maKhuVuc = maKhuVuc
  }

  public getDiaChi(): string {
    return this.diaChi
  }

  public setDiaChi(diaChi: string): void {
    this.diaChi = diaChi
  }

  public getNgayLap(): Date {
    return this.ngayLap
  }

  public setNgayLap(ngayLap: Date): void {
    this.ngayLap = ngayLap
  }

  public getNgayChuyDi(): Date {
    return this.ngayChuyDi
  }

  public setNgayChuyDi(ngayChuyDi: Date): void {
    this.ngayChuyDi = ngayChuyDi
  }

  public getLyDoChuyen(): string {
    return this.lyDoChuyen
  }

  public setLyDoChuyen(lyDoChuyen: string): void {
    this.lyDoChuyen = lyDoChuyen
  }

  public getNguoiThucHien(): number {
    return this.nguoiThucHien
  }

  public setNguoiThucHien(nguoiThucHien: number): void {
    this.nguoiThucHien = nguoiThucHien
  }

  public getSoLanThamGiaHop(): number {
    return this.soLanThamGiaHop
  }

  public setSoLanThamGiaHop(soLanThamGiaHop: number): void {
    this.soLanThamGiaHop = soLanThamGiaHop
  }
}
