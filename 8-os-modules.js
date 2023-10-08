const os=require("os");
const path=require("path");
const fs=require("fs");
const http=require("http");
// console.log(os);
// console.log(path);
// console.log(fs);
// console.log(http);

// info about current user;
const user=os.userInfo();
console.log(user);


// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);