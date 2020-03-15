import './server'

process.on('uncaughtException', error => {
  console.error('uncaughtException', error)
  process.exit(1)
})

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error)
  process.exit(1)
})
