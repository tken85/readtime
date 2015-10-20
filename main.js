
// define standard read speed
var readSpeed = 230;

// allow user to change read speed. Values from http://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/

// grab text

//var allText= document.getElementById('post').textContent;- this is the javascript version used before converting to jquery

var allText = $('#post').text();

//make text into array
var textArr = allText.split(" ");

// remove mistakes from array in the form of punctation or spacing
function notSpace(value){
  return (value !="" && value !="\n" && value !="-" && value !="--" && value !="." && value !="," && value !="?" && value !=";" && value !="!");
}

var filteredArr = textArr.filter(notSpace);

var timeToRead = function(array){
  var result = array.length/readSpeed;
  if(result < 1){
    return 1;
  }

  return result;
}

var readTime = Math.round(timeToRead(filteredArr));

 $('#time').html(readTime + " minutes to read");
/*document.getElementById('time').innerHTML = readTime +" minutes to read";*/

// allow user to change read speed. Values from http://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/

var setReadSpeed = function(selection){
  switch(selection){

  case 0:
    readSpeed = 150;
    readTime = Math.round(timeToRead(textArr));
    $('#time').html(readTime + " minutes to read");
    //document.getElementById('time').innerHTML = readTime +" minutes to read"; - javascript version
    break;

  case 1:
    readSpeed = 230;
    readTime = Math.round(timeToRead(textArr));
    $('#time').html(readTime + " minutes to read");
    //document.getElementById('time').innerHTML = readTime +" minutes to read"; - javascript version
    break;

  case 2:
    readSpeed = 575;
    readTime = Math.round(timeToRead(textArr));
    $('#time').html(readTime + " minutes to read");
    //document.getElementById('time').innerHTML = readTime +" minutes to read"; - javascript version
    break;

  case 3:
    readSpeed = 1500;
    readTime = Math.round(timeToRead(textArr));
    $('#time').html(readTime + " minutes to read");
    //document.getElementById('time').innerHTML = readTime +" minutes to read"; - javascript version
  }
}

// allow user to switch post and recalculate
var setPost = function(whichPost){
  $('#post').html(whichPost.text);
  $('#title').html(whichPost.title);
  //document.getElementById('post').innerHTML = whichPost.text; - javascript version
  //document.getElementById('title').innerHTML = whichPost.title; - javascript version
  allText = $('#post').text();
  //allText= document.getElementById('post').textContent; - javascript version
  textArr = allText.split(" ");
  filteredArr = textArr.filter(notSpace);
  readTime = Math.round(timeToRead(textArr));
  $('#time').html(readTime + " minutes to read");
  //document.getElementById('time').innerHTML = readTime +" minutes to read"; - javascript version
}
