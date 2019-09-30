function stringSplit(str, separator){
  // console.log(str)
  if(str === ''){
    return '';
  }
  const char = str[str.length-1]===separator?'':str[str.length-1]
  return stringSplit(str.slice(0, -1), separator) + char
}

console.log('RETURNS :', stringSplit('20/20/2020', '/'))