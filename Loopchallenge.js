let times2Loop = (number,times, multiplier ) => {
while (times > 0) {
    number = number * multiplier
    times--
}
return number
}
console.log(times2Loop(2,5,2))