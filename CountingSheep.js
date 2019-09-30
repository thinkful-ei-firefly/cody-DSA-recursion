function sheepCount(n){
  //base case
  if(n === 0){
    return console.log('All sheep jumped the fence.')
  }
  console.log(n+': Another sheep jumps over the fence')
  sheepCount(n-1)
}

sheepCount(3)