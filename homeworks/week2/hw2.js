/* pseudo code

function capitalize(str){
    if( str[0]<='z' && str[0]>= 'a')
        str = str[0].Capitalized + str.slice(1)
    return str
        
}

*/

function capitalize(str) {
    if( str[0]<='z' && str[0]>= 'a'){
        str = String.fromCharCode(str[0].charCodeAt()-32) + str.slice(1)
    }
    return str   
}

