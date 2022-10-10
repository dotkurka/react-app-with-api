import React from "react";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validationSchema";
import axios from "axios";

const initialValues = {
    name: "",
    email: "",
    age: "",
};

const addNewUser = (values) => {
    try {
        const resp = axios.post("http://localhost:3000/users/", {
            id: Date.now(),
            name: values.name,
            email: values.email,
            age: values.age,
        });

        console.log(resp.data);
    } catch (error) {
        console.log(error.respons);
    }
};

const AddUserForm = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={addNewUser} validationSchema={validationSchema}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
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
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddUserForm;
