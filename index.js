// index.js (from palindrome.js)
// repos/palindrome/index.js

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
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome()
  {
    return this.processedContent() === this.processedContent().reverse();
  }
}
