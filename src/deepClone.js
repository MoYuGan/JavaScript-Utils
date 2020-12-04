/**
 * 深拷贝
 * @param {拷贝的原对象} currentObj 
 */
function deepClone (currentObj) {
    if (typeof currentObj !== 'object') {
        return currentObj
    }
    let newObj
    if (currentObj instanceof Array) {
        newObj = []
    } else {
        newObj = {}
    }
    for (let key in currentObj) {
        if (currentObj[key] instanceof RegExp) {
            newObj[key] = currentObj[key]
        } else if (currentObj[key] instanceof Date) {
            newObj[key] = currentObj[key]
        } else if (typeof currentObj[key] === 'object') {
            newObj[key] = deepClone(currentObj[key])
        } else {
            newObj[key] = currentObj[key]
        }
    }
    return newObj
}

function testDeepClone () {
    const teacher = {
        name: 'pudding',
        age: 22
    }
    const student = {
        name: 'lzc',
        age: 16,
        regexp: /test/,
        date: new Date('2020-12-01'),
        fun: function () {console.log('this is a student function')},
        teacher
    }
    const newStudent = deepClone(student)
    console.log('student', student)
    console.log('newStudent', newStudent)
}

testDeepClone()