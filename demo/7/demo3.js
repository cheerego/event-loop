const fs = require('fs');


fs.readFile(__filename, function (err, data) {
    process.nextTick(callNextTick)
    fs.readFile(__filename, function (err, data) {
        console.log(data.toString());
    })
});


function callNextTick() {
    console.log(123);
    process.nextTick(callNextTick)
}




