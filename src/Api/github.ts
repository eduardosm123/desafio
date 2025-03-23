import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/"
})


export const getUser = async(name: string) => {
    try {
        const response = await instance.get(`users/${name}`);

        if (response.status === 200) {
            console.log("Request was Sucessful", response.data);
        } else {
            console.log("Request was not successful, status code: ", response.status);
            console.log(response)
        }

        return response;
    } catch (error) {
        console.log("Error response: ", error)
        return error;
    }
}