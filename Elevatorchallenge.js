let elevator = (floor) => {
    let response = `Going to floor ${floor}`
    if (floor === 1) {
        return response
    } else if (floor === 2) {
        return response
    } else if (floor ===3) {
        return response 
    } else {
        return "That is not a valid floor"
    }
}
console.log(elevator(2))