function theBeatlesPlay(musicians, instruments) {
 var whatTheyPlay = [];
  for (var i=0; i<4; i++) {
    whatTheyPlay.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
  return whatTheyPlay;
}

function johnLennonFacts() {
  var newFacts = [];
  while (facts > 0) {
    newFacts.push(facts)
    return facts + "!!!";
  }
}

function iLoveTheBeatles(n) {
 var newArray = [];
  do {
 newArray.push('I love the Beatles!');
 n++;
  } while (n < 15); 
  return newArray;
}
