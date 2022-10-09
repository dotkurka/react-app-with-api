const requesUser = async () => {
    const request = await fetch("http://localhost:3000/users/");
    return request.json();
};

export default requesUser;
