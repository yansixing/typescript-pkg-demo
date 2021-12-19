
'use strict';

const fs = require('fs');
const path = require('path');

function getDirPath() {
    if (process["pkg"]) {
        return path.resolve(process.execPath + "/..");
    } else {
        return path.join(require.main ? require.main.path : process.cwd());
    }
}

console.log("Hello, world!");
console.log("pkg test success!");

process.stdin.resume();