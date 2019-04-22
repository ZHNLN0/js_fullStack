function generateHashtag(str){
    
    return str.length > 140 || str === '' ? false:
    '#' + str.split(' ').map(capitalize).join(' ');
    // if(str==='' || str.length>140){
    //     return false
    // }   
    // else{
    //     return '#' + str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    // }
}
function capitalize (word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(generateHashtag('hello miss dong'));