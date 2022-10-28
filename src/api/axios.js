import axios from "axios"

export const api = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const getUsers = async () => {
    const response = await api.get('/users')
    console.log(response.data.users[0].image)
    return response.data.users
}