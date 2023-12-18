import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required(),
  document: yup.string().required(),
  active: yup.boolean().optional().optional()
});

export type CreateUserType = yup.InferType<typeof userSchema>;

export const resetPasswordSchema = yup.object({
  hash_recovery_password: yup.string().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup
    .mixed()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required()
});

export type ResetPasswordType = yup.InferType<typeof resetPasswordSchema>;

export const userUpdateSchema = yup.object({
  user_id: yup.string().required(),
  name: yup.string().optional(),
  email: yup.string().email().optional(),
  password: yup.string().min(6).optional(),
  document: yup.string().optional(),
  active: yup.boolean().optional().optional()
});

export type UpdateUserType = yup.InferType<typeof userUpdateSchema>;
