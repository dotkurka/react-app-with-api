import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Please enter a valid email").required("Required"),
    age: Yup.number().positive().integer().optional(),
});
