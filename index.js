function theBeatlesPlay(musicians, instruments) {
 var whatTheyPlay = [];
  for (var i=0; i<4; i++) {
    whatTheyPlay.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
  return whatTheyPlay;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (facts > 0) {
    newFacts.push(facts[i] + "!!!")
  }
    return newFacts;
}

function iLoveTheBeatles(n) {
 var newArray = [];
  do {
 newArray.push('I love the Beatles!');
 n++;
  } while (n < 15); 
  return newArray;
}
