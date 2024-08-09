// child process is node module used to create sub process within a script
// you can perform different tasks with your script by just using some methods

const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync('start chrome https://www.google.in')

console.log('output '+cp.execSync('node rough.js'))