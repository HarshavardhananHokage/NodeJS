var asyncFunction = function(arg1) {
    return new Promise((result, reject) => {
        if(arg1 === 1) {
            result("success");
        } else {
            reject("failure");
        }
    });
};

asyncFunction(2).then((result) => {
    console.log("Returned Message: " +result);
}).catch((error) => {
    console.log("Returned Error: " +error);
    throw error + " was handled";
}).catch((err) => {
    console.log(err);
})