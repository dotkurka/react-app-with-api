import axios from "axios";

const requesUser = async () => {
    return await axios.get("http://localhost:3000/users/").then((data) => data.data);
};

export default requesUser;
