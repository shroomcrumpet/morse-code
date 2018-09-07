var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

// Try encoding the following strings:
var firstWord = "hello world";
var secondWord = "we love javascript";

var firstWordArray = [];
firstWordArray = firstWord.split('');

var secondWordArray = [];
secondWordArray = secondWord.split('');

function morse (splitArray) {
    var translatedArray = [];

    for (var i = 0; i < splitArray.length; i++) {

        var key = splitArray[i];

        if (alphabet[key] !== undefined) {
        translatedArray.push(alphabet[key]);
        }
    }

    return translatedArray;
}

console.log (morse(firstWordArray));
console.log (morse(secondWordArray));










