import axios from "axios"
import { useEffect, useState } from "react"

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const includeUpdatableResource = (Component, resourceUrl, resourceName) => {

    return props => {
        const [initialResource, setInitialResource] = useState(null)
        const [resource, setResource] = useState(null)

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceUrl)
                setInitialResource(response.data)
                setResource(response.data)
            })()
        }, [])

        const onChangeResource = updates => {
            setResource((resource) => resource ? { ...resource, ...updates } : null)
        }

        const onPostResource = async () => {
            const response = await axios.post(resourceUrl, { [resourceName]: resource })
            console.log("[onPostResource]", response.data)
            setInitialResource(response.data)
            setResource(response.data)
        }

        const onResetResource = () => {
            setResource(initialResource)
        }

        const resourceProps = {
            [resourceName]: resource,
            ["onChange" + toCapital(resourceName)]: onChangeResource,
            ["onPost" + toCapital(resourceName)]: onPostResource,
            ["onReset" + toCapital(resourceName)]: onResetResource,

        }

        return <Component
            {...props}
            {...resourceProps}
        />
    }
}