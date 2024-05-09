const dayjs_ = async () => {
  return (await import('dayjs')).default
}
const keepDayjs = () => dayjs_
keepDayjs()

const dayjs = await dayjs_()

const date = dayjs('2024-04-28T19:19:12.343Z').format('YYYY-MM-DD')
console.log('%c Line:10 🥓 date', 'font-size:18px;color:#465975;background:#b03734', date)

export {}
