// commonJs, every file is module(by default)
// modules-encapsulated code(only share minimum)

const names=require("./4-names.js");
const sayhi=require("./5-utils.js");
const data=require("./6-alternative-flavor.js");
console.log(names);
names.sayhello("mahi");
sayhi("rahul");
sayhi(names.a);
sayhi(names.b);
console.log(data);

require("./7-mind-grenade.js");