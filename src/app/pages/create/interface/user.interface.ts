export interface IUser{
    name?: string,
    email?: string,
    password?: string,
    role: number
}

export interface IUserLogged{
  id: string,
  email: string,
  password: string
}

export interface IMe {
  id: number
  name: string
  email: string
  role: number
}
