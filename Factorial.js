function fact(num){
  if(num === 1){
    return num
  }
  // console.log(num)
  return fact(num-1) * num
}

console.log(fact(5))