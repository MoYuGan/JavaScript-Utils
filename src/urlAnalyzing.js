/**
 * url query参数解析函数
 * @param {需要解析的url} url 
 */
function urlAnalyzing (url) {
    const queryObj = {}
    const baseUrl = url.split('?')[0]
    const queryStr = url.split('?')[1]
    queryStr.split('&').forEach(queryItem => {
        const key = queryItem.split('=')[0]
        const value = queryItem.split('=')[1]
        queryObj[key] = value
    })
    return {baseUrl, queryObj}
}

function testUrlAnalyzing () {
    const {baseUrl, queryObj} = urlAnalyzing('https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=中方回应美将限制中企在美上市&rsv_idx=2&rsv_dl=fyb_n_homepage&hisfilter=1')
    console.log('queryObj', {baseUrl, queryObj})
}

testUrlAnalyzing()