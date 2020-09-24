const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    let emptyArray = []; 
    let message = "";

    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true;
    }

    for(let i=0; i < letters[0].length; i++) {
        message = "";
         for(let j=0; j < letters[i].length; j++) {
            message += letters[j][i]; 
         }
         emptyArray.push(message);
     }

      if(emptyArray.includes(word)) {
        return true; 
      }

      return false; 

  }


module.exports = wordSearch