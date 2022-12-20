function palindrome (str){
    
    //First I transform all the elements to lower case
    str = str.toLowerCase();
    
    //Remove all non-letters from the string
    const word = str.replace(/[^A-Za-z0-9!?]/g,'');

    //Gets the reversed string: Converts the word into an array, reverses the array and then joins the array into a string again
    const reversedString = word.split("").reverse().join("");

    //If the original string is the same as the reversed one, then it's true, otherwise it's false
    if (word == reversedString)
        return true;
    
    if (word != reversedString)
        return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));