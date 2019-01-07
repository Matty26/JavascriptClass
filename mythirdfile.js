let myFunction = (number1,number2,number3) => {
    let number = (number1*number2)/number3
    let func2 = () => {
        console.log("Hello, I am inside the first function")
    }
    func2()
    return number
}
console.log(myFunction(23,567,98))