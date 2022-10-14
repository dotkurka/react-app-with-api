import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { postUser } from "../../features/store/userSlice";
import { Button, TextField } from "@mui/material/";

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
                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        type="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        helperText={errors.name && touched.name && errors.name}
                    />

                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        helperText={errors.email && touched.email && errors.email}
                    />

                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        type="number"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        helperText={errors.age && touched.age && errors.age}
                    />

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddUserForm;
