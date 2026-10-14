export async function withAsync(fn: () => any) {
    try {
        if (typeof fn !== "function") throw new Error("Must be a function.")

        const { data } = await fn();

        return {
            response: data,
            error: null
        }
    } catch (error: unknown) {
        return {
            response: null,
            error: new Error("Something went wrong...")
        }
    }
}