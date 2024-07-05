
export const dtoParams = (url, methodHttpRequest = 'GET', header ={}, bodyRequest = {}, params = [], condition = false, action = true) => {
    return {
        url,
        methodHttpRequest,
        header,
        bodyRequest,
        params,
        condition
    }
}
