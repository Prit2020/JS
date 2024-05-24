// Immediately Invoked Function Expressions (IIFE)


(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {  // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('prit')