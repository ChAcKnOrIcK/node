const isRunning = true 

setTimeout(() => isRunning = false, 0)
ProcessingInstruction.nextTick(() => console.log('Next tick'))  // даже такая приоритетная фукнкция не будет выполнена, так как поток занет циклом wile спамя консоли

while (isRunning) {
  console.log('While loop is running...')
}