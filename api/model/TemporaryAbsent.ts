export class TamVangModel {
  private ID: number
  private idNhanKhau: number
  private maGiayTamVang: string
  private noiTamTru: string
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

  public getMaGiayTamVang(): string {
    return this.maGiayTamVang
  }

  public setMaGiayTamVang(maGiayTamVang: string): void {
    this.maGiayTamVang = maGiayTamVang
  }

  public getNoiTamTru(): string {
    return this.noiTamTru
  }

  public setNoiTamTru(noiTamTru: string): void {
    this.noiTamTru = noiTamTru
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
