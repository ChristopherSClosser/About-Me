'use strict';
// THE FIRST LINE SHOULD ALWAYS BE...'use strict'
var correct = 0;
var answer;
var takeQuiz = confirm ('Hello, would you like to take a short quiz about me, Chris?');

if (takeQuiz) {
  console.log ('Awesome! Lets get started!');
  // document.write ('<h1>Awesome! Lets get started!</h1>');
  alert ('Awesome! Lets get started!');
} else {
  alert ('Please come back later to play.');
}

// edge case for first 5 questions
function inputVal () {
  while (answer != 'Y' && answer != 'N' && answer != 'YES' && answer != 'NO') {
    answer = prompt (answer + ' Is not a valid input. Please type either a Y or N').toUpperCase();
  }
}

while (takeQuiz) {
  // first question if user clicks ok
  var yesNo = 'Please answer with a Y or N. \n';

// --------my first 5 questions can be condensed into a single function----------------------------------------
  function questionA () {
    var askA = 'Do I have a dog?';
    answer = prompt (yesNo + askA) .toUpperCase ();
    inputVal ();

    if (answer === 'Y' || answer === 'YES') {
      console.log ('Sorry, I do not have a dog.');
      // document.write (askA + '<h2>Sorry I do not have a dog.</h2>');
      alert('Sorry, I do not have a dog.');
    } else {
      correct += 1;
      console.log ('You are correct! I do not have a dog.');
      // document.write (askA + '<h2>You are correct!</h2>');
      alert ('You are correct! I do not have a dog.');
    }
  }

// --------------Q #2---------------
  function questionB () {
    var askB = 'Am I older than 40?';
    answer = prompt (yesNo + askB) .toUpperCase ();
    inputVal ();

    if (answer === 'Y' || answer === 'YES') {
      console.log ('Shame on you! Not quite.');
      // document.write(askB + '<h3>Shame on you! Not quite.</h3>');
      alert ('Shame on you! Not quite.');
    } else {
      correct += 1;
      console.log ('That\'s right, not there yet!');
      // document.write (askB + '<h3>That\'s right, not there yet!</h3>');
      alert ('That\'s right, not there yet!');
    }
  }

// --------------Q #3---------------
  function questionC () {
    var askC = 'Do I like pizza?';
    answer = prompt (yesNo + askC).toUpperCase();
    inputVal ();

    if (answer === 'Y' || answer === 'YES') {
      correct += 1;
      console.log ('Hell yes I do! It does not like me, however.');
      // document.write(askC + '<h4>Hell yes I do! It does not like me, however.</h4>');
      alert ('Hell yes I do! It does not like me however.');
    } else {
      console.log ('Come on! Who doesn\'t like pizza?');
      // document.write(askC + '<h4>Come on! Who doesn\'t like pizza?</h4>');
      alert ('Come on! Who doesn\'t like pizza?');
    }
  }

// --------------Q #4--------------
  function questionD () {
    var askD = 'Do I like to gamble?';
    answer = prompt (yesNo + askD).toUpperCase();
    inputVal ();

    if (answer === 'Y' || answer === 'YES') {
      console.log ('No I do not!');
      // document.write (askD + '<h5>No! I do not!</h5>');
      alert ('No! I do not!');
    } else {
      correct += 1;
      console.log ('Right! It\'s bad enough all of that money leaves my possession and I get nothing.');
      // document.write ( askD + '<h5>Right! It\'s bad enough all of that money leaves my possession and I get nothing.</h5>');
      alert ('Right! It\'s bad enough all of that money leaves my possession, and I get nothing!');
    }
  }

// --------------Q #5---------------
  function questionE () {
    var askE = 'Is it true that i have been to the moon?';
    answer = prompt (yesNo + askE) .toUpperCase ();
    inputVal ();

    if (answer === 'Y' || answer === 'YES') {
      console.log ('I wish! 12 people have been on the moon and no one since 1972.');
      // document.write (askE + '<h6>I wish! 12 people have been on the moon and no one since 1972.</h6>');
      alert ('I wish! 12 people have been on the moon, and no one since 1972.');
    } else {
      correct += 1;
      console.log ('Yup you are right only 12 people  have been on the moon and I am not one.');
      // document.write (askE + '<h6>Yup you are right only 12 people  have been on the moon and I am not one.</h6>');
      alert ('Yup you are right only 12 people have been on the moon, and I am not one.');
    }
  }

// --------------Q #6---------------
  function questionF () {
    var userNum = prompt ('I am thinking of a number between 1 and 20. \nYou have 3 tries');
    userNum = parseInt (userNum);
    console.log (userNum);
    console.log (typeof userNum);

    //function to make sure user is entering a valid number
    function validNum () {

      if (userNum > 20) {
        userNum = prompt (userNum + ' is greater than 20! Please enter a number between 1 and 20.');
        userNum = parseInt (userNum);
      }

      while (isNaN(userNum)) {
        userNum = prompt (userNum + ' is not a number, please enter a number between 1 and 20.');
        userNum = parseInt (userNum);
        console.log (typeof userNum);

        if (userNum > 20) {
          userNum = prompt (userNum + ' is greater than 20! Please enter a number between 1 and 20.');
          userNum = parseInt (userNum);
        }
      }
    }

    validNum ();
    var tries = 3;
    var myNum = Math.floor (Math.random () * 20 + 1);

    for (var i = 0; i < 4; i++) {
      console.log (typeof userNum);
      console.log (myNum);

      if (userNum !== myNum) {
        if (tries === 0) {
          alert ('I\'m sorry!\n\nThe correct number was ' + myNum);
        }
        if (i !== 3) {
          console.log (userNum);
          if (userNum > myNum) {
            console.log ('I\'m sorry ' + userNum + ' is not the number I was thinking of. Try a smaller number.' + '\nYou have ' + tries + ' more tries.');
            userNum = prompt ('I\'m sorry ' + userNum + ' is not the number I was thinking of. Try a smaller number.' + '\n\nYou have ' + tries + ' more tries.');
            userNum = parseInt (userNum);
            //tries = tries - 1;
            tries -= 1;
            validNum ();
          } else {
            console.log ('I\'m sorry ' + userNum + ' is not the number I was thinking of. Try a larger number.' + '\nYou have ' + tries + ' more tries.');
            userNum = prompt ('I\'m sorry ' + userNum + ' is not the number I was thinking of. Try a larger number.' + '\n\nYou have ' + tries + ' more tries.');
            userNum = parseInt (userNum);
            //tries = tries - 1;
            tries -= 1;
            validNum ();
          }
        }
      } else {
        correct += 1;
        console.log ('You are correct! I was thinking about ' + userNum + '.');
        alert ('You are correct! I was thinking about ' + userNum + '.');
        break;
      }
    }
  }

  // Q #7 where have I lived
  function questionG () {
    var tries = 6;
    var cali = false;
    var tex = false;
    var ok = false;

    for (var i = 0; i < 6; i++) {
      var userAns = prompt ('Besides Washington, what other states do you think I lived?') .toLowerCase ();

      function compare () {
        var correctString = 'You are correct, I have lived in ';
//--- need to end tries if all answers have been correct
        //if (!cali && !tex && !ok) {
        if (userAns === 'california') {
          //tries = tries - 1;
          tries -= 1;
          cali = true;
          correct += 1;
          console.log (cali + tex + ok);
          alert (correctString + userAns + '\nYou have ' + tries + ' more tries');
        } else if (userAns === 'texas') {
          //tries = tries - 1;
          tries -= 1;
          tex = true;
          correct += 1;
          console.log (cali + tex + ok);
          alert (correctString + userAns + '\nYou have ' + tries + ' more tries');
        }else if (userAns === 'oklahoma') {
          //tries = tries - 1;
          tries -= 1;
          ok = true;
          correct += 1;
          console.log (cali + tex + ok);
          alert (correctString + userAns + '\nYou have ' + tries + ' more tries');
        } else {
          //tries = tries - 1;
          tries -= 1;
          alert ('I have not lived in ' + userAns + '.' + '\nYou have ' + '\nYou have ' + tries + ' more tries');
          console.log (cali + tex + ok);
        }
        //}
      }
      compare ();
    }
  }
// Can wrap these in a funtion
  questionA ();
  questionB ();
  questionC ();
  questionD ();
  questionE ();
  questionF ();
  questionG ();

  document.write ('<div>You got ' + correct + ' of 9 answers correct!</div>');

  console.log ('You got ' + correct + ' of 9 answers correct!');
  // document.write();
  takeQuiz = confirm ('I have lived in California, Texas, and Oklahoma' + '\nYou got ' + correct + ' of 9 answers correct!\n\nTry again?');
  // if user clicks 'ok' game will start agian
}

// done...print the page
