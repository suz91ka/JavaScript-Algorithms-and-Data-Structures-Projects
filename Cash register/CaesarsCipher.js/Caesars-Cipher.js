function rot13(str) {
    const map = {
      original: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      rot13:    "NOPQRSTUVWXYZABCDEFGHIJKLM"
    };
  
    let result = "";
    for(let i=0; i < str.length; i++) {
      let coded_letter = str.charAt(i);
  
      let index = map.rot13.indexOf(coded_letter);
  
      if (index != -1) {
        let decoded_letter = map.original.charAt(index);
        result = result + decoded_letter;
      } else {
        result = result + coded_letter;
      }
  
    }
  
    return result;
  }
  
  rot13("SERR PBQR PNZC");