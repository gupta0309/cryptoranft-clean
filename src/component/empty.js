exports.isEmpty = (data) => {
    var value = data;
    console.log("typeof ",typeof value);
    console.log("value ",value);
    if(value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)){
            return false;
        }
    else{
        return true;
    }
}