import axios from "axios"
import { useEffect, useState } from "react"

export const includeUpdatableUser = (Component, userId) => {

    return props => {
        const [initialUser, setInitialUser] = useState(null)
        const [user, setUser] = useState(null)

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`)
                setInitialUser(response.data)
                setUser(response.data)
            })()
        }, [])

        const onChangeUser = updates => {
            setUser((user) => user ? { ...user, ...updates }: null)
        }

        const onPostUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user })
            console.log("[onPostUser]", response.data)
            setInitialUser(response.data)
            setUser(response.data)
        }

        const onResetUser = () => {
            setUser(initialUser)
        }

        return <Component
            {...props}
            user={user}
            onChangeUser={onChangeUser}
            onPostUser={onPostUser}
            onResetUser={onResetUser}
        />
    }
}