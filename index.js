function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}





function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input

  return word === reversedWord;

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
   > If the input string is the same after I reverse it, I should return
> true
Here's how we can translate that into a pseudocode version of our algorithm:
```txt
reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
