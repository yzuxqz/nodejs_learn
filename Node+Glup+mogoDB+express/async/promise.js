const fs = require('fs');
let promise = new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, result) => {
        if (err != null) {
            reject(err);
        } else {
            resolve(result);
        }
    });
});
promise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    });