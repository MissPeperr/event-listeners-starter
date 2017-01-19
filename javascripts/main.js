var outputEl = document.getElementById("output-target");

/*
  You can get a reference to DOM elements and
  directly attach an event handler. In this
  example, we get every element with a class of
  "article-section" and listen for when the
  user clicks on the element. When that event
  fires, the attached "handleSectionClick"
  function gets executed.
 */

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl",articleEl);

//Ask: does the order matter? When will function be called?
function handleSectionClick(MouseEvent) {
  console.log(MouseEvent);
  var elementText = MouseEvent.target.innerHTML;
  outputEl.innerHTML = "You clicked on the " + elementText;
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

/*
  Get a reference to the DOM element with an id of
  "page-header", and attach an event handler for the
  mouseover, and mouseout, events. Log some message
  to the console for each.
 */
var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  outputEl.innerHTML ="The force is strong with this one";
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "Remember… the Force will be with you, always";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);


/*
  We can also write an anonymous function (lamba expression)
  in the addEventListener declaration instead of using a
  function reference
 */
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function (event) {
  console.log("event",event);
  outputEl.innerHTML = event.target.value;
});


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
document.getElementById("wrapper").addEventListener("click", function(event) {
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any section
     // * Notice how when you click on a section, it executes
       // this code, but *also* the code on line 17.
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
});

// Looping through array and adding events doesn't work with innerHTML because
// it removed previous items from the DOM before reinsering them.
// This deletes the added event handlers. Here's an alternative
var myArr = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
]
myArr.forEach(function(quote, index) {
  let phraseString = `<div id="quote--${index}">
                        <h3>"${quote}" - Star Wars</h3>
                      </div>`
  let phraseDiv = document.createElement("div"); //<---Here's the key to adding the cards with the clicke event intact
  phraseDiv.innerHTML = phraseString;
  document.getElementById("stickItHere").appendChild(phraseDiv);
  let phraseDOM = document.getElementById(`quote--${index}`);
  phraseDOM.addEventListener("click", function() {
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
