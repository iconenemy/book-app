import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email")
        .required("Enter email"),
    password: yup
        .string()
        .min(8, "Sorry, your password must be between 8 and 30 characters long")
        .max(30, "Sorry, your password must be between 8 and 30 characters long")
        .required("Enter password"),
});

export type LoginForm = yup.InferType<typeof loginSchema>;
