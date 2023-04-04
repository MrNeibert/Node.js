const os = require('os')
const user = os.userInfo()

console.log(user)

console.log (`The system Uptime is ${os.uptime} seconds`)

const currentOS = {
  name:os.type(),
  Release:os.release(),
  totalMem:os.totalmem(),
  freMem: os.freemem()
}

console.log(currentOS)