/**
 * url query参数拼接函数
 * @param {基础url} baseUrl 
 * @param {参数对象} queryObj 
 */
function urlSplice (baseUrl, queryObj) {
    let allUrl = ''
    if (baseUrl.indexOf('?') !== -1) {
        allUrl = baseUrl
    } else {
        allUrl = baseUrl + '?'
    }
    Object.keys(queryObj).forEach(queryItem => {
        if (allUrl[allUrl.length - 1] !== '?') {
            allUrl += '&'
        } 
        allUrl += queryItem + '=' + queryObj[queryItem]
    })
    return allUrl
}

function testUrlSplice () {
    const allUrl = urlSplice('http://www.baidu.com?xxx=yyy', {
        name: 'pudding',
        age: 16,
        job: 'student'
    })
    console.log('allUrl', allUrl)
}

testUrlSplice()