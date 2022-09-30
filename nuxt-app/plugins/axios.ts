import {defineNuxtPlugin} from "#app";
import Axios, {AxiosInstance} from "axios";


export let axios: AxiosInstance

export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance = Axios.create({
        baseURL: "http://localhost:1128",
        withCredentials: false
    })


    nuxtApp.provide("axios", axiosInstance)
    axios = axiosInstance
})
