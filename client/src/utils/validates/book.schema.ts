import * as yup from "yup";

export const createBookSchema = yup.object({
    title: yup
        .string()
        .min(5, "Sorry, your author must be between 5 and 50 characters long")
        .max(50, "Sorry, your author must be between 5 and 50 characters long")
        .required("Title cannot be an empty field"),
    author: yup
        .string()
        .min(5, "Sorry, your author must be between 5 and 100 characters long")
        .max(100, "Sorry, your author must be between 5 and 100 characters long")
        .required("Author name cannot be an empty field"),
    description: yup
        .string()
        .min(5, "Sorry, your description must be between 5 and 500 characters long")
        .max(500, "Sorry, your description must be between 5 and 500 characters long")
        .required("Description cannot be an empty field"),
    isbn: yup
        .string()
        .length(13, "ISBN should have a 13 length")
        .required("ISBN cannot be an empty field"),
    page_count: yup
        .number()
        .min(15, "Sorry, your page must be between 15 and 1000 characters long")
        .max(1000, "Sorry, your page must be between 15 and 1000 characters long")
        .required("Page count cannot be an empty field"),
    owner: yup
        .string()
        .required("Enter owner"),
    section: yup
        .array()
        .min(1, "Choose one or more section of book")
        .required("Choose section of book"),
});

export type CreateBookForm = yup.InferType<typeof createBookSchema>;
