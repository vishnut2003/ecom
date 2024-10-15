
export default {
    signupUser: (user: { username: string, email: string, password: string }) => {
        return new Promise((resolve, reject) => {
            console.log(user);
        })
    }
}