import axios from "axios";

// const requesUser = async () => {
//     const request = await fetch("http://localhost:3000/users/");
//     return request.json();
// };

const requesUser = async () => {
    return await axios.get("http://localhost:3000/users/").then((data) => data.data);
};

export default requesUser;
