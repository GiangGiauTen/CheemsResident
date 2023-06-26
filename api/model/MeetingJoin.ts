export class ThamGiaCuocHopModel {
  private idCuocHop: number
  private idNhanKhau: number

  constructor(idCuocHop: number, idNhanKhau: number) {
    this.idCuocHop = idCuocHop
    this.idNhanKhau = idNhanKhau
  }

  public getIdCuocHop(): number {
    return this.idCuocHop
  }

  public setIdCuocHop(idCuocHop: number): void {
    this.idCuocHop = idCuocHop
  }

  public getIdNhanKhau(): number {
    return this.idNhanKhau
  }

  public setIdNhanKhau(idNhanKhau: number): void {
    this.idNhanKhau = idNhanKhau
  }
}
