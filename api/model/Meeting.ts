export class Meeting {
  private ID: number
  private maCuocHop: string
  private ngayHop: Date
  private ngayTaoCuocHop: Date
  private diaDiem: string
  private noiDung: string
  private idNguoiTaoCuocHop: number

  constructor(
    ID: number,
    maCuocHop: string,
    ngayHop: Date,
    ngayTaoCuocHop: Date,
    diaDiem: string,
    noiDung: string,
    idNguoiTaoCuocHop: number,
  ) {
    this.ID = ID
    this.maCuocHop = maCuocHop
    this.ngayHop = ngayHop
    this.ngayTaoCuocHop = ngayTaoCuocHop
    this.diaDiem = diaDiem
    this.noiDung = noiDung
    this.idNguoiTaoCuocHop = idNguoiTaoCuocHop
  }

  public getID(): number {
    return this.ID
  }

  public setID(ID: number): void {
    this.ID = ID
  }

  public getMaCuocHop(): string {
    return this.maCuocHop
  }

  public setMaCuocHop(maCuocHop: string): void {
    this.maCuocHop = maCuocHop
  }

  public getNgayHop(): Date {
    return this.ngayHop
  }

  public setNgayHop(ngayHop: Date): void {
    this.ngayHop = ngayHop
  }

  public getNgayTaoCuocHop(): Date {
    return this.ngayTaoCuocHop
  }

  public setNgayTaoCuocHop(ngayTaoCuocHop: Date): void {
    this.ngayTaoCuocHop = ngayTaoCuocHop
  }

  public getDiaDiem(): string {
    return this.diaDiem
  }

  public setDiaDiem(diaDiem: string): void {
    this.diaDiem = diaDiem
  }

  public getNoiDung(): string {
    return this.noiDung
  }

  public setNoiDung(noiDung: string): void {
    this.noiDung = noiDung
  }

  public getIdNguoiTaoCuocHop(): number {
    return this.idNguoiTaoCuocHop
  }

  public setIdNguoiTaoCuocHop(idNguoiTaoCuocHop: number): void {
    this.idNguoiTaoCuocHop = idNguoiTaoCuocHop
  }
}
