import { useEffect, useState } from "react"
import { fetchUsers } from "../api/usersAPI"
import { User } from "../types"
import { AxiosError } from "axios"

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<AxiosError | null>(null);
    // To much middle states to manage in consumer components

    const initFetchUsers = async () => {
        try {
            setIsLoading(true)
            const response = await fetchUsers()
            setUsers(response.data)
        } catch (error) {
            if (error instanceof AxiosError) setError(error)
        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        users,
        error,
        isLoading,
        initFetchUsers
    }
}

export const Users = () => {
    const { users, isLoading, initFetchUsers } = useFetchUsers()

    useEffect(() => {
        initFetchUsers()
    }, [])

    return (
        <>

            {isLoading ? <div><p>Is loading...</p></div> : <button onClick={initFetchUsers}>Fetch users</button>}
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