function choice(arr) {
    let newChoice = Math.floor(Math.random() * arr.length)
    return arr[newChoice]
}

export { choice }