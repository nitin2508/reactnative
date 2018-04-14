const validate = (val,rules,connectedValue)=>{
    let isValid = true;
    for(let rule in rules){
        switch(rule){
            case 'isEmail':
            isValid = isValid && emailValidator(val);
            break;
            case 'minLength':
            isValid = isValid && minLengthValidator(val,rules[rule]);
             break;
            case 'equalTo':
            isValid = isValid && equalToValidator(val,rules[rule],connectedValue[rule]);
             break;
            default:
            isValid = true;
        }
    }
    console.log(isValid)
    return isValid;
}

const emailValidator = val=>{
    console.log(val);
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(val))
     return re.test(val);
}

const minLengthValidator = (val,minLength)=>{
    return val.length>=minLength;
}

const equalToValidator = (val,checkValue)=>{
    return val ==checkValue;
}

export default validate;