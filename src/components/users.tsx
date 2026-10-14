import { useEffect, useState } from "react"
import { fetchUsers } from "../api/usersAPI"
import { User } from "../types"
import { withAsync } from "../helpers/with-async";

type API_STATUS = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    // To much middle states to manage in consumer components
    const [fetchUsersStatus, setFetchUsersStatus] = useState<API_STATUS>("IDLE")

    const initFetchUsers = async () => {
        setFetchUsersStatus("PENDING")
        const { response, error } = await withAsync(() => fetchUsers())
        
        if (error) {
            setFetchUsersStatus("ERROR")
        }
        else {
            setUsers(response)
            setFetchUsersStatus("SUCCESS")
        }
    }

    return {
        users,
        fetchUsersStatus,
        initFetchUsers
    }
}

export const Users = () => {
    const { users, fetchUsersStatus, initFetchUsers } = useFetchUsers()

    useEffect(() => {
        initFetchUsers()
    }, [])

    return (
        <>
            {fetchUsersStatus === "PENDING" ? <div><p>Is loading...</p></div> : <button onClick={initFetchUsers}>Fetch users</button>}
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