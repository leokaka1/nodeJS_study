const os = require('os');
module.exports = function () {
        const mem = os.freemem() / os.totalmem * 100;
        console.log(`内存占用率,${mem}%`)
}