import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch() {
    const [users, setUsers] = useState([]);
    const getUsers = async (token) => {
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users", {cancelToken: token});
            setUsers(data);
        } catch (error) {
            console.log("logging", error.message)
        }
    }

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        getUsers(source.token)
        return () => {
            source.cancel("Request Canceled")
            console.log("Request Canceled")
        }
    }, []);
    return users;
}