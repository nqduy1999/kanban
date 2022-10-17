export type IResponse = {
  err_code: string,
  msg: string,
  data: Record<string, any>
}

export interface IResponseLogin extends IResponse {
  data: {
    token: string
  }
}

export interface IResponseSignup extends IResponse {
  data: {
    token: string
  }
}

export interface IResponseGetUser extends IResponse {
  data: {
    user: any
  }
}