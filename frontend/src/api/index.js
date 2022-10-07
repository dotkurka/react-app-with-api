const fetchUset = async () => {
    const request = await fetch("https://reqres.in/api/users?page=2");
    return request.json();
};

export default fetchUset;
