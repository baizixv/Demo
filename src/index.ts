import dayjs from 'dayjs'

const testFunc = (val: string) => dayjs(val).format('YYYY-MM')

const test1 = testFunc('')
const test2 = testFunc('2022/04/13')

console.log('%c Line:6 🍿 test1', 'font-size:18px;color:#465975;background:#ffdd4d', test1)
console.log('%c Line:8 🧀 test2', 'font-size:18px;color:#465975;background:#ed9ec7', test2)
