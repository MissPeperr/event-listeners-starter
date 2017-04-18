var saywhat = document.getElementById("output");

/*
  You can get a reference to DOM elements and
  directly attach an event handler. In this
  example, we get every element with a class of
  "article-section" and listen for when the
  user clicks on the element. When that event
  fires, the attached "handleSectionClick"
  function gets executed.
 */

//getElementsByClassName returns an HTML collection - similar to an array, but no the same
var articleItems = document.getElementsByClassName("article-section");
console.log("articleItems", articleItems);

//Ask: does the order matter? When will function be called?
function handleClick(MouseEvent) {
  console.log(MouseEvent);
  var elementText = MouseEvent.target.innerHTML;
  saywhat.innerHTML = "You clicked on " + elementText;
}

for (var i = 0; i < articleItems.length; i++) {
  articleItems.item(i).addEventListener("click", handleClick);
}




/*
  Get a reference to the DOM element with an id of
  "page-header", and attach an event handler for the
  mouseover, and mouseout, events. Log some message
  to the console for each.
 */
var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  saywhat.innerHTML ="The force is strong with this one";
}

function handleHeaderMouseOut(event) {
  saywhat.innerHTML = "Remember… the Force will be with you, always";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);


/*
  We can also write an anonymous function (lamba expression)
  in the addEventListener declaration instead of using a
  function reference
 */

var inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function (event) {
  console.log("event",event);
  saywhat.innerHTML = event.target.value;
});


/*
  another version of anonymous function - change the styles
*/
var obiwan = document.getElementById("obi-wan");

document.getElementById("add-color")
  .addEventListener("click", function() {
  obiwan.classList.toggle("blue");
});

document.getElementById("make-large")
  .addEventListener("click", function() {
  obiwan.classList.toggle("large");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  obiwan.classList.toggle("bordered");
});

document.getElementById("add-rounding")
  .addEventListener("click", function() {
  obiwan.classList.toggle("rounded");
});


/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */

 // add list item to html page
document.getElementById("wrapper").addEventListener("click", function(event) {
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any section
     // * Notice how when you click on a section, it executes
       // this code, but *also* the code on above.
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
});

/*  Looping through array and adding events doesn't work with innerHTML because
    it removed previous items from the DOM before reinsering them.
    This deletes the added event handlers. Here's an alternative
*/

//BE SURE TO ADD <div id="stickItHere"></div>

var quotesArray = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
]


quotesArray.forEach(function(quote, index) {
  let quoteBlock = `<div id="quote--${index}">
                        <h3>"${quote}" - Star Wars</h3>
                      </div>`
  let quoteDiv = document.createElement("div"); //<---Here's the key to adding the cards with the click event intact
  quoteDiv.innerHTML = quoteBlock;
  document.getElementById("stickItHere").appendChild(quoteDiv);
  let quoteDOM = document.getElementById(`quote--${index}`);
  quoteDOM.addEventListener("click", function() {
    console.log("event", event);
    event.currentTarget.classList.add("red");
  });
});


/*
A long time ago in a galaxy far, far away…
Use the force, Luke.
The force is strong with this one.
Do. Or do not. There is no try.
Fear is the path to the dark side.
Someday I will be the most powerful Jedi ever.
You were the chosen one! 
*/
