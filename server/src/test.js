const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const condition = true;
        if (condition) {
            resolve('Success')
        }
        else {
            reject('Rejected')
        }
    }, 2000)
})

// console.log(promise)

// promise.then((message) => {
//     console.log(promise)
//     console.log(message)
// }).catch((message) => {
//     console.log(promise)
//     console.log(message)
// })

Promise.all([
    promise,
    promise,
    promise
]).then((value) => {
    console.log(value)
})
