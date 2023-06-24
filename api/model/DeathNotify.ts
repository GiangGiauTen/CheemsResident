export class DeathNotify {
  private ID: number
  private soGiayKhaiTu: string
  private idNguoiKhai: number
  private idNguoiChet: number
  private ngayKhai: Date
  private ngayChet: Date
  private lyDoChet: string

  public getID(): number {
    return this.ID
  }

  public setID(ID: number): void {
    this.ID = ID
  }

  public getSoGiayKhaiTu(): string {
    return this.soGiayKhaiTu
  }

  public setSoGiayKhaiTu(soGiayKhaiTu: string): void {
    this.soGiayKhaiTu = soGiayKhaiTu
  }

  public getIdNguoiKhai(): number {
    return this.idNguoiKhai
  }

  public setIdNguoiKhai(idNguoiKhai: number): void {
    this.idNguoiKhai = idNguoiKhai
  }

  public getIdNguoiChet(): number {
    return this.idNguoiChet
  }

  public setIdNguoiChet(idNguoiChet: number): void {
    this.idNguoiChet = idNguoiChet
  }

  public getNgayKhai(): Date {
    return this.ngayKhai
  }

  public setNgayKhai(ngayKhai: Date): void {
    this.ngayKhai = ngayKhai
  }

  public getNgayChet(): Date {
    return this.ngayChet
  }

  public setNgayChet(ngayChet: Date): void {
    this.ngayChet = ngayChet
  }

  public getLyDoChet(): string {
    return this.lyDoChet
  }

  public setLyDoChet(lyDoChet: string): void {
    this.lyDoChet = lyDoChet
  }
}
