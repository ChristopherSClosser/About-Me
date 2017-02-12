var myHomes = ['California', 'Texas', 'Oklahoma'];
for (var i = 0; i < 6; i++) {
  var userAns = prompt('Besides Washington, what other states do you think I lived?');
  for (var ii = 0; ii < myHomes.length; ii++) {
    console.log(userAns + myHomes[ii]);
    if(userAns === myHomes[ii]){
      console.log('You are correct, I have lived in ' + userAns);
      alert('You are correct, I have lived in ' + userAns);
      break;
    } else {
      //correct += 1;
      console.log('I\'m sorry please try again. \nI have never lived in ' + userAns);
      alert('I\'m sorry please try again. \nI have never lived in ' + userAns);
    }
  }
}
