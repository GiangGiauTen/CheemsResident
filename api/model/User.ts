class UserModel {
  private ID: number
  private userName: string
  private passwd: string

  getID(): number {
    return this.ID
  }

  setID(ID: number): void {
    this.ID = ID
  }

  getPasswd(): string {
    return this.passwd
  }

  setPasswd(passwd: string): void {
    this.passwd = passwd
  }

  getUserName(): string {
    return this.userName
  }

  setUserName(userName: string): void {
    this.userName = userName
  }
}
