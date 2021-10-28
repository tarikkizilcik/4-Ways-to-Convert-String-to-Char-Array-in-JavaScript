// Function Definition: If the entered word contains the letter k, it makes the first letter k and prints the word again, if there is no k, it prints "There is no letter k in the word".

function wordFinder(word) {
    // Option 1
    //let splitWord = word.split('');

    // Option 2
    let splitWord = [...word];

    // Option 3
    // let splitWord = Array.from(string);

    //Option 4
    // let splitWord = Object.assign([], word);

    let findK = splitWord.find(word => word === "k");

    if (findK) {
        splitWord[0] = "k";
        console.log(...word);
        console.log(splitWord);
        console.log("The Original word was: " + word);
        //join("") => It allows us to convert the character array back to string.
        word = splitWord.join("");
        console.log("Modified word is: " + word);
        console.log(word);
    }
    else
        return console.log("There is no letter k in the word.");
}

wordFinder("Testk");