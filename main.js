

// define standard read speed
var readSpeed = 230;

// allow user to change read speed. Values from http://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/


var readSpeed = 230;
// grab text
var allText= document.body.textContent;

//make text into array
var textArr = allText.split(" ");
// remove mistakes from array

function notSpace(value){
  return value !="";
}
var filteredArr = textArr.filter(notSpace);

var timeToRead = function(array){
  var result = array.length/readSpeed;
  if(result < 1){
    return 1;
  }

  return result;
}

var readTime = Math.round(timeToRead(textArr));

document.getElementById('time').innerHTML = readTime +" minutes";

// allow user to change read speed. Values from http://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/

var setReadSpeed = function(selection){
  switch(selection){

  case 0:
    readSpeed = 150;
    readTime = Math.round(timeToRead(textArr));
    document.getElementById('time').innerHTML = readTime +" minutes";
    break;

  case 1:
    readSpeed = 230;
    readTime = Math.round(timeToRead(textArr));
    document.getElementById('time').innerHTML = readTime +" minutes";
    break;

  case 2:
    readSpeed = 575;
    readTime = Math.round(timeToRead(textArr));
    document.getElementById('time').innerHTML = readTime +" minutes";
    break;

  case 3:
    readSpeed = 1500;
    readTime = Math.round(timeToRead(textArr));
    document.getElementById('time').innerHTML = readTime +" minutes";
  }
}
