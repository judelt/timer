const arr = process.argv.slice(2)
arr.sort((a, b) =>{
  return a-b;
});
const timer = function (arr) {
  for(const num of arr) {
    if(num !== NaN && num > 0)
    setTimeout(() => {
      process.stdout.write('.');
    }, Number(num)*1000);
  }
}

timer(arr)