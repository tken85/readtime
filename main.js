
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

// turning word grab and filtering into function for later recall

var getNumWords = function(){
  allText = $('#post').text();
  textArr = allText.split(" ");
  filteredArr = textArr.filter(notSpace);
}

var timeToRead = function(array){
  var result = array.length/readSpeed;
  if(result < 1){
    return 1;
  }

  return result;
}

var setReadTime = function(){
  var readTime = Math.round(timeToRead(filteredArr));

  // grammar fix
  if(readTime <=1){
    $('#time').html(readTime + " minute to read");
  }
  else{
   $('#time').html(readTime + " minutes to read");
 }
   /*document.getElementById('time').innerHTML = readTime +" minutes to read"; -- javascript code */
}

setReadTime();


// allow user to change read speed. Values from http://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/

var setReadSpeed = function(selection){
  switch(selection){

  case 0:
    readSpeed = 150;
    setReadTime();

    break;

  case 1:
    readSpeed = 230;
    setReadTime();
    break;

  case 2:
    readSpeed = 575;
    setReadTime();
    break;

  case 3:
    readSpeed = 1500;
    setReadTime();
  }
}

// allow user to switch post and recalculate
var setPost = function(whichPost){
  $('#post').html(whichPost.text);
  $('#title').html(whichPost.title);
  getNumWords();
  setReadTime();
  //document.getElementById('post').innerHTML = whichPost.text; - javascript version
  //document.getElementById('title').innerHTML = whichPost.title; - javascript version
  //allText= document.getElementById('post').textContent; - javascript version


}

/* working on plug-in function
$.fn.readTime = function(){
  this.text().split(" ");

}*/
