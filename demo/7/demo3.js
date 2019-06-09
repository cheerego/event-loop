const fs = require('fs');


fs.readFile('/Users/catchme/Sites/event-loop/readme.md', function (err, data) {
    process.nextTick(callNextTick)
    fs.readFile('/Users/catchme/Sites/event-loop/readme.md',function (err, data) {
        console.log(data.toString());
    })
});


function callNextTick() {
    console.log(123);
    process.nextTick(callNextTick)
}




