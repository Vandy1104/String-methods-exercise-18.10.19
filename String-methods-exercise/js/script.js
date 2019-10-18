console.log('String Methods Exercise');




// var web =  ['html','css','javascript'];
// var s = document.getElementById('text').value;
// document.getElementById('add').addEventListener('click', function(){
//   reversed = s.split("");
//   console.log(reversed);
// });

//


// first exercise
var givenString = prompt('Enter a word');
console.log(givenString);

var splitString = givenString.split('');
console.log(splitString);
var reversedString = splitString.reverse();
console.log(reversedString);
var joinString = reversedString.join('');
console.log(joinString);

if (joinString === givenString) {
alert('Yes it is palindrome');
} else {
  alert('No it is not palindrome');
}
//end of first exercise


// var reversedString = givenString.reverse();

//console.log(givenString);
//console.log(givenString);
// var reversedString = givenString;
//
// var reversedString = givenString;
// reversedString.reverse();
//
// console.log(givenString);
// console.log(reversedString);
//
// if (givenString === reversedString) {
// document.getElementById('result').innerHTML = 'Given String is a palindrome';
// } else {
// document.getElementById('result').innerHTML +=  '<br> Given String is not a palindrome';
// }



// Ex - 2

// var x = parseInt(prompt('Enter a number'));
//
// if (x % 2 == 0) {
//   document.getElementById('result').innerHTML +=  '<br> Even Number';
// } else {
//   document.getElementById('result').innerHTML +=  '<br> Odd Number';
//
// }

// Ex - 3

// var givenSentence = 'The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.';
//
// var replacedSentence = givenSentence.replace('mistakes','bugs');
//
// //console.log(replacedSentence);
//
// document.getElementById('result').innerHTML += '<br>' + replacedSentence;


// Ex - 4

var web =  ['html','css','javascript'];
var s = document.getElementById('text').value;
document.getElementById('text').addEventListener('click', function(){

});
