const fs = require('fs')
let isRunning = true 

setTimeout(() => isRunning = false, 100)
process.nextTick(() => console.log('Next tick'))  // даже такая приоритетная фукнкция не будет выполнена, так как поток занет циклом wile спамя консоли

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve())
  }) 
}

async function whileLoop() {
  while (isRunning) {
    console.log('While loop is running...')
    await setImmediatePromise()
  }
}

whileLoop().then(() => console.log('While loop ended'))