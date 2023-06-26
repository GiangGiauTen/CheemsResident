export class TemporaryResident {
  private ID: number
  private idNhanKhau: number
  private maGiayTamTru: string
  private soDienThoaiNguoiDangKy: string
  private tuNgay: Date
  private denNgay: Date
  private lyDo: string

  public getID(): number {
    return this.ID
  }

  public setID(ID: number): void {
    this.ID = ID
  }

  public getIdNhanKhau(): number {
    return this.idNhanKhau
  }

  public setIdNhanKhau(idNhanKhau: number): void {
    this.idNhanKhau = idNhanKhau
  }

  public getMaGiayTamTru(): string {
    return this.maGiayTamTru
  }

  public setMaGiayTamTru(maGiayTamTru: string): void {
    this.maGiayTamTru = maGiayTamTru
  }

  public getSoDienThoaiNguoiDangKy(): string {
    return this.soDienThoaiNguoiDangKy
  }

  public setSoDienThoaiNguoiDangKy(soDienThoaiNguoiDangKy: string): void {
    this.soDienThoaiNguoiDangKy = soDienThoaiNguoiDangKy
  }

  public getTuNgay(): Date {
    return this.tuNgay
  }

  public setTuNgay(tuNgay: Date): void {
    this.tuNgay = tuNgay
  }

  public getDenNgay(): Date {
    return this.denNgay
  }

  public setDenNgay(denNgay: Date): void {
    this.denNgay = denNgay
  }

  public getLyDo(): string {
    return this.lyDo
  }

  public setLyDo(lyDo: string): void {
    this.lyDo = lyDo
  }
}
