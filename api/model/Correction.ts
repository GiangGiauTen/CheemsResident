export class Correction {
  private ID: number
  private idHoKhau: number
  private thongTinThayDoi: string
  private thayDoiTu: string
  private thayDoiThanh: string
  private ngayThayDoi: Date
  private idNguoiThayDoi: number

  constructor(
    ID: number,
    idHoKhau: number,
    thongTinThayDoi: string,
    thayDoiTu: string,
    thayDoiThanh: string,
    ngayThayDoi: Date,
    idNguoiThayDoi: number,
  ) {
    this.ID = ID
    this.idHoKhau = idHoKhau
    this.thongTinThayDoi = thongTinThayDoi
    this.thayDoiTu = thayDoiTu
    this.thayDoiThanh = thayDoiThanh
    this.ngayThayDoi = ngayThayDoi
    this.idNguoiThayDoi = idNguoiThayDoi
  }

  public getID(): number {
    return this.ID
  }

  public getIdHoKhau(): number {
    return this.idHoKhau
  }

  public setIdHoKhau(idHoKhau: number): void {
    this.idHoKhau = idHoKhau
  }

  public getThongTinThayDoi(): string {
    return this.thongTinThayDoi
  }

  public setThongTinThayDoi(thongTinThayDoi: string): void {
    this.thongTinThayDoi = thongTinThayDoi
  }

  public getThayDoiTu(): string {
    return this.thayDoiTu
  }

  public setThayDoiTu(thayDoiTu: string): void {
    this.thayDoiTu = thayDoiTu
  }

  public getThayDoiThanh(): string {
    return this.thayDoiThanh
  }

  public setThayDoiThanh(thayDoiThanh: string): void {
    this.thayDoiThanh = thayDoiThanh
  }

  public getNgayThayDoi(): Date {
    return this.ngayThayDoi
  }

  public setNgayThayDoi(ngayThayDoi: Date): void {
    this.ngayThayDoi = ngayThayDoi
  }

  public getIdNguoiThayDoi(): number {
    return this.idNguoiThayDoi
  }

  public setIdNguoiThayDoi(idNguoiThayDoi: number): void {
    this.idNguoiThayDoi = idNguoiThayDoi
  }

  public updateValue(
    idHoKhau: number,
    thongTinThayDoi: string,
    thayDoiTu: string,
    thayDoiThanh: string,
    ngayThayDoi: Date,
    idNguoiThayDoi: number,
  ): void {
    this.idHoKhau = idHoKhau
    this.thongTinThayDoi = thongTinThayDoi
    this.thayDoiTu = thayDoiTu
    this.thayDoiThanh = thayDoiThanh
    this.ngayThayDoi = ngayThayDoi
    this.idNguoiThayDoi = idNguoiThayDoi
  }
}
