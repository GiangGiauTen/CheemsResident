export class ThanhVienCuaHoModel {
  private idNhanKhau: number
  private idHoKhau: number
  private quanHeVoiChuHo: string

  constructor(idNhanKhau: number, idHoKhau: number, quanHeVoiChuHo: string) {
    this.idNhanKhau = idNhanKhau
    this.idHoKhau = idHoKhau
    this.quanHeVoiChuHo = quanHeVoiChuHo
  }

  getIdNhanKhau(): number {
    return this.idNhanKhau
  }

  setIdNhanKhau(idNhanKhau: number): void {
    this.idNhanKhau = idNhanKhau
  }

  getIdHoKhau(): number {
    return this.idHoKhau
  }

  setIdHoKhau(idHoKhau: number): void {
    this.idHoKhau = idHoKhau
  }

  getQuanHeVoiChuHo(): string {
    return this.quanHeVoiChuHo
  }

  setQuanHeVoiChuHo(quanHeVoiChuHo: string): void {
    this.quanHeVoiChuHo = quanHeVoiChuHo
  }
}
