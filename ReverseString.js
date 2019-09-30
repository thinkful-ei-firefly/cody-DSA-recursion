function revStr(str){
  // console.log(str[0])
  if(str === ''){
    return ''
  }
  
  return revStr(str.substring(1)) + str[0]

}

console.log(revStr('hello'))