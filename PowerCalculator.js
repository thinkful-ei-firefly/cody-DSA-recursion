function pwrCalc(b, exp){
  //base case
  if(exp <= 1) {
    return b
  }
  if(exp < 0){
    return console.log('Exponent must be >= 0')
  }
  // b *= b
  return pwrCalc(b, exp-1) * b
}

console.log(pwrCalc(10, 2))
