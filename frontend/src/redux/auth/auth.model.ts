export interface UserModel {
  "id": string,
  "username": string,
  "role": string
}

export interface AuthModel {
  user: UserModel
}