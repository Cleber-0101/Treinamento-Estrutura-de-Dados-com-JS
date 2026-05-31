/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    
    return function() {
       return n++
    };
};

const counter = createCounter(10);

// retornar uma função que a cada vez que ela é chamada precisa somar mais 1 
// CLOUSURES