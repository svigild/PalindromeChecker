/* Input Text */
const txtInput = document.getElementById('input-text');
/* Input Button */
const button = document.getElementById('button');
/* Message that says if it's a palindrome or not */
infoTxt = document.querySelector(".info-txt");

/* If it's something written in the input, then the button is clickable */
txtInput.addEventListener("keyup", () => {
    if (txtInput.value.length > 0){
        button.classList.add("active");
    } else {    //If the input it's empty, the button won't be clickable
        button.classList.remove("active");
    }
    
});

/* If the button it's clicked, the process starts */
button.addEventListener("click", () => {
    /* Get the text from the input */
    let inputText = txtInput.value;
    let boolean = palindrome(inputText);

    infoTxt.style.display = "block";
    if (!boolean){
        return infoTxt.innerHTML = `No, <span>'${inputText}'</span> isn't a palindrome!`;
    }
    return infoTxt.innerHTML = `Yes, <span>'${inputText}'</span> is a palindrome!`;
});


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
