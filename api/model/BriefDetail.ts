export class BriefDetail {
  private ID: number
  private idNhanKhau: number
  private tuNgay: Date
  private denNgay: Date
  private diaChi: string
  private ngheNghiep: string
  private noiLamViec: string

  constructor(
    ID: number,
    idNhanKhau: number,
    tuNgay: Date,
    denNgay: Date,
    diaChi: string,
    ngheNghiep: string,
    noiLamViec: string,
  ) {
    this.ID = ID
    this.idNhanKhau = idNhanKhau
    this.tuNgay = tuNgay
    this.denNgay = denNgay
    this.diaChi = diaChi
    this.ngheNghiep = ngheNghiep
    this.noiLamViec = noiLamViec
  }

  getID(): number {
    return this.ID
  }

  setID(ID: number): void {
    this.ID = ID
  }

  getIdNhanKhau(): number {
    return this.idNhanKhau
  }

  setIdNhanKhau(idNhanKhau: number): void {
    this.idNhanKhau = idNhanKhau
  }

  getTuNgay(): Date {
    return this.tuNgay
  }

  setTuNgay(tuNgay: Date): void {
    this.tuNgay = tuNgay
  }

  getDenNgay(): Date {
    return this.denNgay
  }

  setDenNgay(denNgay: Date): void {
    this.denNgay = denNgay
  }

  getDiaChi(): string {
    return this.diaChi
  }

  setDiaChi(diaChi: string): void {
    this.diaChi = diaChi
  }

  getNgheNghiep(): string {
    return this.ngheNghiep
  }

  setNgheNghiep(ngheNghiep: string): void {
    this.ngheNghiep = ngheNghiep
  }

  getNoiLamViec(): string {
    return this.noiLamViec
  }

  setNoiLamViec(noiLamViec: string): void {
    this.noiLamViec = noiLamViec
  }
}
