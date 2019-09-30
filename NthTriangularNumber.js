function triNum(num){
  if(num === 1){
    return 1
  }
  return triNum(num-1) + num
}
// Tn = n(n+1)/2

console.log(triNum(5))