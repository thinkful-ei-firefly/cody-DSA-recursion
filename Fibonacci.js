function fib(num){
  // console.log(num)
  if(num < 2){
    return num
  }
  return (fib(num -1) + fib(num-2))
}

console.log('FIB:',fib(7))