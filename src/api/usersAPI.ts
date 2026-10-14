import api from "./api"
import { User } from "../types"

const URLS = {
    fetchUsersUrl: "users"
}

export const fetchUsers = ()=> {
    return api.get<User[]>(URLS.fetchUsersUrl, {
        baseURL: "https://jsonplaceholder.typicode.com/"
    })
}