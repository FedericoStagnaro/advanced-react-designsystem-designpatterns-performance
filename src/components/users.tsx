import { useEffect, useState } from "react"
import { fetchUsers } from "../api/usersAPI"
import { User } from "../types"

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const initFetchUsers = async () => {
        const response = await fetchUsers()
        setUsers(response.data)
    }

    return {
        users,
        initFetchUsers
    }
}

export const Users = () => {
    const { users, initFetchUsers } = useFetchUsers()

    useEffect(() => {
        initFetchUsers()
    }, [])

    return (
        <>
            <button onClick={initFetchUsers}>Fetch users</button>
            <div>
                {
                    users.map((user) => {
                        return <>
                            <p>{user.name}</p>
                        </>
                    })
                }
            </div>
        </>
    )
}