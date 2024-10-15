import axios, { AxiosError, AxiosResponse } from "axios";
import { FormEvent } from "react"

export default {
    submitSignup: (e: FormEvent, formData: { username: string, email: string, password: string }) => {
        return new Promise((resolve, reject) => {
            e.preventDefault();
            axios.post('/api/users/signup', formData)
                .then((response: AxiosResponse) => {
                    console.log(response);
                })
                .catch((error: AxiosError) => {
                    console.log(error);
                })
        })
    }
}