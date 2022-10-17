import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { postUser } from "../../features/store/userSlice";
import { Button, TextField } from "@mui/material/";
import "./AddUserFrom.scss";

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
        <div className="user-form">
            <Formik
                initialValues={initialValues}
                onSubmit={addNewUser}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form className="user-form-contain" onSubmit={handleSubmit}>
                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Name"
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
                            label="Email"
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
                            label="Age"
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
        </div>
    );
};

export default AddUserForm;
