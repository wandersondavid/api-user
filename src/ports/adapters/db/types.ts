import { LoginType } from "@/core/auth/types";
import { CreateUserType, ResetPasswordType, UpdateUserType } from "@/core/user/types";

//------------------ Users ------------------//

export type RegisterUserInDB<T> = (input: CreateUserType) => Promise<T>;

export type UpdateUserInDB<T> = (input: UpdateUserType) => Promise<T>;

export type FindByIdUserType = {
  user_id: string;
};

export type FindByIdUserInDB<T> = (input: FindByIdUserType) => Promise<T>;

export type FindAllUserType = {
  page?: string;
  search?: string;
};

export type FindAllUserInDB<T> = (input: FindAllUserType) => Promise<T>;

export type DeleteUserType = {
  user_id: string;
};

export type DeleteUserInDB = (input: DeleteUserType) => Promise<void>;

export type FindByUserUserType = {
  user_id: string;
};

export type FindByUserUserInDB<T> = (input: FindByUserUserType) => Promise<T>;

export type RecoveryPasswordType = {
  email: string;
};

export type RecoveryPasswordInDB<T> = (
  input: RecoveryPasswordType
) => Promise<T>;


export type ResetPasswordInDB = (input: ResetPasswordType) => Promise<void>;


//------------------ Auth ------------------//

export type AuthUserInDB<T> = (input: LoginType) => Promise<T>;


export type LogoutUserType = {
  user_id: string;
};

export type LogoutUserInDB = (input: LogoutUserType) => Promise<void>;