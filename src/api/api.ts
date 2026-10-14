import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

const axiosParams = {
    baseURL:
        process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
}

const axiosInstance = axios.create(axiosParams)

type URL = string

const api = (axios: AxiosInstance) => {
    return {
        get: <TResponse>(url: URL, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> => axios.get(url, config),
        delete: <TResponse>(url: URL, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> => axios.delete(url, config),
        post: <TResponse, Tbody = unknown>(url: URL, body: Tbody, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> => axios.post(url, body, config),
        put: <TResponse, Tbody = unknown>(url: URL, body: Tbody, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> => axios.put(url, body, config),
        patch: <TResponse, Tbody = unknown>(url: URL, body: Tbody, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> => axios.patch(url, body, config),
    }
}

export default api(axiosInstance)