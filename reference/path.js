const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__dirname));

console.log(path.extname(__filename));

console.log(path.parse(__filename).base);

// conctenate paths
console.log(path.join(__dirname,'test','hello.html'));