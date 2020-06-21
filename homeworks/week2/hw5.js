/* pseudo code for join
function join(arr,concatStr){
    var word = arr[0]
    for ( i from 1 to arr.length ) do
        word = word + concatStr + arr[i]
    endfor
    return word
}
*/
/* pseudo code for repeat

function repeat(str,times){
    var word = ''
    for ( i from 1 to times) do 
    word += str
}
*/
function join(arr, concatStr) {
    var word = arr[0]
    for(var i = 1 ; i < arr.length ; i++ )
        word = word + concatStr + arr[i]
    return word
}

function repeat(str, times) {
    var word = ''
    for(var i = 1 ; i <= times ; i++)
        word += str
    return word
}
