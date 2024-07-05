import {useState} from "react";

export const dtoResponse = (response) => {
    const [data, setData] = useState({});

    return {
        data: response.data,
        loading: false,
        error: null
    };
}
