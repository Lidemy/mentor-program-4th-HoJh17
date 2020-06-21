/* pseudo code
function reverse(str){
    let word = ''
    for (i from n-1 to 0) do
        word += str[i]
    endfor
    console.log(word)
}

*/

function reverse(str) {
    var word = ''
    for(var i = str.length - 1 ; i>=0 ; i--)
        word += str[i]
    console.log(word)
}
