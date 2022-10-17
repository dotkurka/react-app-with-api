import axios from "axios";
const blabla = process.env.REACT_APP_HOST_ADRESS;
console.log(blabla);

const requesUser = async () => {
    return await axios.get(`${process.env.REACT_APP_HOST_ADRESS}/users/`).then((data) => data.data);
};

export default requesUser;
