import axios from "axios"
import { useEffect, useState } from "react"

export const useResource = (url) => {
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(url)
            setResource(response.data)
        })()
    }, [url])

    return resource;
}

