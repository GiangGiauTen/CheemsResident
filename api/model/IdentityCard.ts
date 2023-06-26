export class IdentityCard {
  private ID: number
  private idNhanKhau: number
  private soCMT: string
  private ngayCap: Date
  private noiCap: string

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

  public getSoCMT(): string {
    return this.soCMT
  }

  public setSoCMT(soCMT: string): void {
    this.soCMT = soCMT
  }

  public getNgayCap(): Date {
    return this.ngayCap
  }

  public setNgayCap(ngayCap: Date): void {
    this.ngayCap = ngayCap
  }

  public getNoiCap(): string {
    return this.noiCap
  }

  public setNoiCap(noiCap: string): void {
    this.noiCap = noiCap
  }
}
