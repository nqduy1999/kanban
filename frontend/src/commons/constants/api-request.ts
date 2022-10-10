export type IPostLogin = {
  username: string,
  password: string
}

export type IPostRegister = {
  username: string,
  password: string,
  confirmPassword: string
}

export type ICheckingUsername = {
  username: string
}

export type IResponse = {
  err_code: number,
  data: Record<string, unknown>,
  msg: string;
}

export type IError = {
  response: Record<string, unknown>
}