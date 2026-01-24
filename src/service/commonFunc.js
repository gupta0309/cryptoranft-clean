
export const hexToDec  = (data) => {
    let getDecimal = parseInt(data, 16);
    if(getDecimal){
        return getDecimal;
    }else{
        return "";
    }
}
