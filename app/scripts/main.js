console.log('MEOW!!!');

$('.carousel').carousel({
	pause: "hover"

})

var localKittenList = []; // local list
var collectionType = "kittens2";


// Set up add new kitten and event handlers
$(document).ready( function(){
  initKittenList(); 
  $("#addButton").click(addKitten); 
  $("#clearButton").click(clearList);
});

// read form, update local dictionary and save it to remote
function addKitten (e){
  console.log("Running addKitten");
  // get form contents, add it to the dictionary, save dictionary, display dictionary
  var entry={};
  entry.def = $("#hairAndColor").val();      // get values from form
  entry.age = $("#ageInput").val();
  entry.sex = $("#maleOrFemale").val();
  entry.pic = $("#kittenPicture").val();
  localKittenList.push(entry);        // update local dictionary
  displayLocalKittenList();                // display it
  saveList();                   // store it
  e.preventDefault();                 // thwart the button's natural instincts
}


// look for a dictionary or create it if it's missing
function initKittenList(){
  console.log("Running initKittenList.");


  // draw the word list from the local storage
function displayLocalKittenList(){
  console.log("Running displayLocalKittenList.");
  $newKitten = $('#newKitten');       // cache the reference to speed up loop below
  $newKitten.html(" ");				      // clear out the old contents
                                    // add all the entries from the dictionary to the list
  $.each(localKittenList, function(index, entry){	
    $newKitten.append("<dt>" + entry.def + "</dt><dd>" + entry.age + "</dt><dd>" + entry.sex + "</dt><dd>" + entry.pic + "</dd>");
  });
}