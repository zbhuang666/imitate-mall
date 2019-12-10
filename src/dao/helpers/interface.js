import requestHandler from 'axios'
import access from './accessHeader'

const instance = requestHandler.create()
instance.defaults.timeout = 30000; // 超时时间

/**
 * request拦截器
 */
instance.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
});

/**
 * response请求拦截
 */
instance.interceptors.response.use((response) => {
    return response.data
}, (err) => {
    return Promise.reject(err)
});

/**
 * 发送axios请求
 * @param url
 * @param param
 * @param extra
 * @param method
 * @returns {Promise<any>}
 */
const axiosCall = (url, param, extra,  method) => {
    let config = {
        method: method,
        url,
        headers : access.accessHeadersInfo(extra)
    };
    if (param) {
        config[method === 'GET' ? 'params' : 'data'] = param
    }

    return new Promise((resolve, reject) => instance.request(config)
        .then((res) => {
            resolve(res)
        })
        .catch(res => {
                reject(res)
        }))
};

export default {
    get (url, param, extra) {
        return axiosCall(url, param, extra, 'GET')
    },
    post (url, param, extra) {
        return axiosCall(url, param, extra, 'POST')
    },
    delete (url, param, extra) {
        return axiosCall(url, param, extra, 'DELETE')
    }
}
