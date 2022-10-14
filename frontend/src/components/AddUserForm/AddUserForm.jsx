import React from "react";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { postUser } from "../../features/store/userSlice";

const initialValues = {
    name: "",
    email: "",
    age: "",
};

const AddUserForm = () => {
    const dispatch = useDispatch();

    const addNewUser = (values) => {
        dispatch(postUser(values));
    };

    return (
        <Formik initialValues={initialValues} onSubmit={addNewUser} validationSchema={validationSchema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Field
                        type="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <Field
                        type="number"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                    />
                    {errors.age && touched.age && errors.age}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default AddUserForm;
