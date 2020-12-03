function dateAnalyzing (date) {
    const year = date.getFullYear() // 年
    const month = date.getMonth() + 1 // 月
    const day = date.getDate() // 日
    const hour = date.getHours() // 时
    const minute = date.getMinutes() // 分
    const second = date.getSeconds() // 秒

    return {
        year,
        month,
        day,
        hour,
        minute,
        second
    }
}

function testDateAnalyzing () {
    const dateObj = dateAnalyzing(new Date())
    console.log('dateObj', dateObj)
}

testDateAnalyzing()