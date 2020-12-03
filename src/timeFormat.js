/**
 * 时间格式化函数
 * @param {时间格式} fmt 
 * @param {时间} date 
 */
function timeFormat(fmt, date) {
    const opt = {
        'y+': date.getFullYear().toString(),        // 年
        'M+': (date.getMonth() + 1).toString(),     // 月
        'd+': date.getDate().toString(),            // 日
        'h+': date.getHours().toString(),           // 时
        'm+': date.getMinutes().toString(),         // 分
        's+': date.getSeconds().toString()          // 秒
    }
    Object.keys(opt).forEach(key => {
        let ret
        ret = new RegExp('(' + key + ')').exec(fmt)
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[key] : opt[key].padStart(ret[1].length, '0'))
        }
    })
    return fmt
}

function testTimeFormat() {
    const fmtTime =  timeFormat('yyyy-MM-dd hh:mm:ss', new Date())
    console.log('fmtDate', fmtTime)
}

testTimeFormat()