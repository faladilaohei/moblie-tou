import { axios } from "axios"

const request = axios.create({
    baseURL: "http://toutiao-app.itheima.net" // 基础路径
})

export default request
