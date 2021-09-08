const numberVerify = (myNum, num) => myNum === num;

const lotery = (myNum, callback) => {
  const num = Math.floor((Math.random() * 5) +1)
  return callback(myNum, num) ? `Lucky day, your number ${myNum} won!` : `Try Again, your number ${myNum} is diferent from the sorted ${num}`;
}
console.log(lotery(5, numberVerify));

