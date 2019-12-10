/**
 * 解析额外请求头
 * @param header
 * @param extra
 * @returns {*}
 */
const analysisHeader = (header, extra) => {
    if (extra && extra.length) {
        extra.map(headerObject => {
            header[headerObject.key] = headerObject.value;
        });
    }
    return header;
};

/**
 * 封装请求头
 * @param extra 请求头的对象数组
 * @returns {{Accept: string, "Accept-Language": string, "Content-Type": string}}
 */
const accessHeadersInfo = (extra) => {
    let header = {
        'Accept-Language': 'zh-CN',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    analysisHeader(header, extra);
    return header
};

export default {
    accessHeadersInfo
}
