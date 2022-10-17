import axios from "axios";

const postUsers = (values) => {
    try {
        axios.post("http://localhost:3000/users/", {
            id: Date.now(),
            name: values.name,
            email: values.email,
            age: values.age,
        });
    } catch (error) {
        console.log(error.respons);
    }
};

export default postUsers;
