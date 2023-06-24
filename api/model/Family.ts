export class Family {
  private ID: number
  private idNhanKhau: number
  private hoTen: string
  private namSinh: Date
  private gioiTinh: string
  private quanHeVoiNhanKhau: string
  private ngheNghiep: string
  private diaChiHienTai: string

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

  public getHoTen(): string {
    return this.hoTen
  }

  public setHoTen(hoTen: string): void {
    this.hoTen = hoTen
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

  public getQuanHeVoiNhanKhau(): string {
    return this.quanHeVoiNhanKhau
  }

  public setQuanHeVoiNhanKhau(quanHeVoiNhanKhau: string): void {
    this.quanHeVoiNhanKhau = quanHeVoiNhanKhau
  }

  public getNgheNghiep(): string {
    return this.ngheNghiep
  }

  public setNgheNghiep(ngheNghiep: string): void {
    this.ngheNghiep = ngheNghiep
  }

  public getDiaChiHienTai(): string {
    return this.diaChiHienTai
  }

  public setDiaChiHienTai(diaChiHienTai: string): void {
    this.diaChiHienTai = diaChiHienTai
  }
}
