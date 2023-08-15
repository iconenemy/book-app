import * as yup from "yup";

export const registerSchema = yup.object({
    first_name: yup
        .string()
        .min(4, "Sorry, your first name must be between 4 and 25 characters long")
        .max(25, "Sorry, your first name must be between 4 and 25 characters long")
        .required("Enter first name"),
    last_name: yup
        .string()
        .min(4, "Sorry, your last name must be between 4 and 25 characters long")
        .max(25, "Sorry, your last name must be between 4 and 25 characters long")
        .required("Enter last name"),
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

export type RegistrerForm = yup.InferType<typeof registerSchema>;
