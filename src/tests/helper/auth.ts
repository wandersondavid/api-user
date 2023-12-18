import request from "supertest";
import {  ResetPasswordType } from "@/core/user/types";
import { app } from "./server";

type AuthEmail = {
  email: string;
  password: string;
};
export const authEmail = async ({ email, password }: AuthEmail) => {
  return request(app)
    .post("/login")
    .send({
      email,
      password
    })
    .set("Content-Type", "application/json");
};

type RecoveryPasswordType = {
  email: string;
};
export const recoveryPassword = async ({ email }: RecoveryPasswordType) => {
  return request(app)
    .post("/recovery-password")
    .send({
      email
    })
    .set("Content-Type", "application/json");
};

export const resetPassword = async ({
  hash_recovery_password,
  password,
  confirm_password
}: ResetPasswordType) => {
  return request(app)
    .post("/reset-password")
    .send({
      hash_recovery_password,
      password,
      confirm_password
    })
    .set("Content-Type", "application/json");
};
