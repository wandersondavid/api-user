import { CreateUserType } from "@/core/user/types";
import request from "supertest";
import { app } from "./server";

export const resgisterUser = async (data: CreateUserType) => {
  return request(app)
    .post("/users")
    .send({
      ...data
    })
    .set("Content-Type", "application/json");
};

type FindAllUsersProps = {
  token: string;
};
export const findAllUsers = async (data: FindAllUsersProps) => {
  return request(app)
    .get("/users")
    .set("Authorization", `Bearer ${data.token}`)
    .set("Content-Type", "application/json");
};

type FindUserByIdProps = {
  token: string;
  user_id: string;
};
export const findUserById = async (data: FindUserByIdProps) => {
  return request(app)
    .get(`/users/${data.user_id}`)
    .set("Authorization", `Bearer ${data.token}`)
    .set("Content-Type", "application/json");
};

type FindUserByEmailProps = {
  token: string;
  email: string;
};
export const findUserByEmail = async (data: FindUserByEmailProps) => {
  return request(app)
    .get(`/users/email/${data.email}`)
    .set("Authorization", `Bearer ${data.token}`)
    .set("Content-Type", "application/json");
};

type DeleteUserByIdProps = {
  token: string;
  user_id: string;
};
export const deleteUserById = async (data: DeleteUserByIdProps) => {
  return request(app)
    .delete(`/users/${data.user_id}`)
    .set("Authorization", `Bearer ${data.token}`)
    .set("Content-Type", "application/json");
};

type UpdateUserByIdProps = {
  token: string;
  user_id: string;
  data: CreateUserType;
};
export const updateUserById = async ({
  user_id,
  data,
  token
}: UpdateUserByIdProps) => {
  return request(app)
    .patch(`/users/${user_id}`)
    .send({
      ...data,
    })
    .set("Authorization", `Bearer ${token}`)
    .set("Content-Type", "application/json");
};
