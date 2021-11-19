function timeConversion(str) {
    if(str.indexOf("AM") !== -1) {
        str = str.replace("AM", "").split(":");
        if(str[0] === "12") str[0] = String(+str[0]-12)+"0"
    } else {
        str = str.replace("PM", "").split(":");
        if(str[0] !== "12") str[0] = String(+str[0] + 12);
    }
    return str.join(":")
    
    }
    