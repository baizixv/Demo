import dayjs from 'dayjs'

const testFunc = (val: string) => dayjs(val).format('YYYY-MM')

const test1 = testFunc('')
console.log('%c Line:6 🍿 test1', 'font-size:18px;color:#465975;background:#ffdd4d', test1)

const test2 = testFunc('2022/04/13')
console.log('%c Line:8 🧀 test2', 'font-size:18px;color:#465975;background:#ed9ec7', test2)

const test3 = testFunc('2024-04-08T16:00:00.000Z')
console.log('%c Line:8 🍖 test3', 'font-size:18px;color:#ed9ec7;background:#3f7cff', test3)

const test4 = testFunc('2024-04-30T16:59:59.000Z')
console.log('%c Line:15 🥛 test4', 'font-size:18px;color:#f5ce50;background:#ed9ec7', test4)

