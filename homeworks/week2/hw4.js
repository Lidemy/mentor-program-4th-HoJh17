/* pseudo code

function printFactor(n){
    for (i from 1 to n-1) do
        n mod i = 0 ? console.log(i) : null
}
*/
function printFactor(n) {
    for(var i = 1 ; i <= n ; i++)
        (n % i === 0) ? console.log(i) : null
}
