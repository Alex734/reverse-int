module.exports = function reverse (n) {
    let absN = Math.abs( n );
    if(absN !== NaN) {
        return absN.toString().split('').reverse().join('');
    } else {
        return 0;
    }
}
