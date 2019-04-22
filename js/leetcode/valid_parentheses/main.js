//验证的字符串的正确性
/** 
 * 功能是 决定字符串中的符号是正确的
 * @params str 字符串，包含()[]{} 
*/
const isValid = (str) =>{
    let obj = {};
    obj["{"] = "}";
    obj["["] = "]";
    obj["("] = ")";

    let sta =[];
    for(let i=0;i<str.length;i++){
        if(!sta.length){
            sta.push(str[i]);
        }else{
            if(str[i]===obj[sta[sta.length-1]]){
            sta.pop();
            }else{
                sta.push(str[i]);
            }
        }
    }
    console.log(!sta.length);      
}

isValid("({)");
isValid("(){}[]");
isValid("({})");