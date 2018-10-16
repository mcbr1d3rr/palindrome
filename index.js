// index.js (from palindrome.js)
// repos/palindrome/index.js

module.exports = Phrase;

// description: add reverse to all string
// return: reversed string
// Reverses a string.
String.prototype.reverse = function ()
{
  return Array.from(this).reverse().join("");
}

// fn Phrase()
// description: defines a palindrome Phrase object,
// includes palindrome function into the Phrase object as a method
// input: content
// returns: True if palindrome, else false
function Phrase(content)
{
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent()
  {
    return this.letters().toLowerCase();
  }

/*
  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters()
  {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++)
    {
      if (this.content.charAt(i).match(/[a-zA-Z]/))
      {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }
*/
/*
  // or this .forEach
  this.letters = function letters()
  {
    let theLetters = [];
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function(character)
    {
      if (character.match(letterRegex))
      {
        theLetters.push(character);
      }
    });
    return theLetters.join("");
  }
*/
/*
  // or this . filter & .match
  this.letters = function letters()
  {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }
*/
  // or this, .match
  this.letters = function letters()
  {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome()
  {
    return this.processedContent() === this.processedContent().reverse();
  }
}
