/**
 * 数组去重函数
 * @param {需要去重的数组} arr 
 */
function uniqueArray (arr) {
    const newArr = []
    const assistObj = {}
    arr.forEach(item => {
        if (!assistObj[item]) {
            newArr.push(item)
            assistObj[item] = 1
        }
    })
    return newArr
}

function testUniqueArray () {
    const newArr = uniqueArray([1, 2, 3, 2, 3, 4, 4, 5, 1, 6, 7, 7, 7, 8, 9, 9, 8, 1])
    console.log('newArr', newArr)
}

testUniqueArray()