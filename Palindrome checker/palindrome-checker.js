function palindrome(str) {
    // cleanse the str:  ("ra Ce")
    // - keep alphanumeric chars
    // - lowercase them
  
    let clean_str = ""
    let code;
    for (let i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 96 && code < 123)) { // lower alpha (a-z)
          clean_str = clean_str + str.charAt(i);
        }
  
        if ( code > 64 && code < 91 ) { // upper alpha (A-Z)
          clean_str = clean_str + str.charAt(i).toLowerCase();
        }
  
      }
  
  
    let end;
    let result = true;
    for (let start = 0, len = clean_str.length; start < len; start++) {
      end = clean_str.length - start;
      if (clean_str.charCodeAt(start) != clean_str.charCodeAt(end-1) ) {
        result = false;
      }
    }
  
    console.log(str + ": " + clean_str + " is " + result)
    return result;
  }
  
  palindrome("eye");