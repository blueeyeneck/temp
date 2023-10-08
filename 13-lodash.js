// npm - global command, comes with Node
// npm -- versions

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm insatll -g <packageName< (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items=[1,[2,[3,[5,[5,6]]]]]

const newItems=_.flattenDeep(items);

console.log(items);
console.log(newItems);