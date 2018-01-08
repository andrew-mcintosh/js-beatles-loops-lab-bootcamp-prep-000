function theBeatlesPlay(musicians, instruments) {
 var whatTheyPlay = [];
  for (var i=0; i<4; i++) {
    whatTheyPlay.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
  return whatTheyPlay;
}

function johnLennonFacts() {
  var newFacts = [];
  var i = 0;
  while (facts > 0) {
    newFacts.push(facts[i] + "!!!")
    i++;
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
