import React, { useEffect } from "react";
import { useState } from "react";

const client = async (url) => {
    const clientData = await fetch(url);
    if (clientData.ok) {
        return clientData.json();
    }
    return new Promise.reject(clientData.toString());
};

const useAllChar = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(() => {
        client("https://rickandmortyapi.com/api/character")
            .then((data) => setData(data.results))
            .catch((error) => setErrorData(error.toString()))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isSucces: data ? true : false,
        isError: errorData ? true : false,
        isLoading,
        data,
        errorData,
    };
};

const Learn = () => {
    const { isSucces, isError, isLoading, data, errorData } = useAllChar();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isSucces && (
                <table>
                    <tbody>
                        {data?.map(({ id, name, status, species, image }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>
                                    <img style={{ width: "20px", height: "20px" }} src={image} alt="" />
                                </td>
                                <td>{name}</td>
                                <td>{status}</td>
                                <td>{species}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {isError && <div>{errorData}</div>}
        </>
    );
};

export default Learn;
