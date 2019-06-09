const fs = require('fs');

fs.readFile(__filename, function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());

    setTimeout(() => {
        console.log(1);
    }, 0)

    setImmediate(() => {
        console.log(2);
    })
})


