function telephoneCheck(str) {
    let regex = "^ (1|1)?([(]{1}[0-9]{3}{)]{1}|[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}$";

    if(str.match(regex)) {
        return true;
    }
    return false;
};
telephoneCheck("555-555-5555");