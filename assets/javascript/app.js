
// ARRAY WITH GIFABLE ITEMS

var animalArray = ["horse","dog","cat","apple","seal"];
// CONVERT ARRAY TO BUTTONS


$(document).ready(function(){
    buttons();
    
    $("#animalForm" ).submit('#addAnimal', function() {
        
        event.preventDefault();
        console.log('hello');
         var what = $("#inputAnimal").val().trim();
         animalArray.push(what);
         buttons();
         $("#inputAnimal").val("");
    });

}


);

// create buttons from array
// create buttons from array
// create buttons from array
function buttons() {

    $("#animalButtons").empty();

    for (i=0;i<animalArray.length;i++){

    console.log(animalArray[i]);
    var whichAnimal = animalArray[i];
    var butt = $("<button class='buttons' id='"+ whichAnimal+"'>").text(whichAnimal);

    $("#animalButtons").append(butt);

    }
}


$("#animalButtons").on("click",".buttons", function(){

    var animal = $(this).attr("id");
    var results;

// GIPHY API
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
animal + "&api_key=K3U45rE8JzgCJaSTyY0aq6af1voU9FxG&limit=10";

// Performing an AJAX request with the queryURL
$.ajax({
url: queryURL,
method: "GET",})


.then(function(response) {
    var results = response.data;
    console.log(results);


// DISPLAYING THE INFO ON CLICK, PREPEND
for (var i = 0; i < results.length; i++) {

   // Creating and storing a div tag
   var animalDiv = $("<div>");

    // Creating a paragraph tag with the result item's rating
    var p = $("<p>").text("Rating: " + results[i].rating);

    // Creating and storing an image tag
     var animalImage = $('<img src="'+results[i].images.fixed_height_still.url+'" class="animal-gif" >');
//     // Setting the src attribute of the image to a property pulled off the result item
       animalImage.attr("animated", results[i].images.fixed_height.url);

//     // Appending the paragraph and image tag to the animalDiv
     animalDiv.append(p);
     animalDiv.append(animalImage);

//     // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
       $("#animals").prepend(animalDiv);
 }

})});


// pause/play
// pause/play

$(document.body).on('click',"img", function(){
var src = $(this).attr("src")
var anim = $(this).attr("animated")

    $(this).attr("src", anim);
    $(this).attr("animated", src);
    
})









