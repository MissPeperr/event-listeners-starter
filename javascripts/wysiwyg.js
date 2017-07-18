
// 1. Create an array of objects that represents famous people (see structure below).
var people = [
  { name: "Sappho",
    title: "Poet",
    bio: "Sappho's poetry was well-known and greatly admired through much of antiquity, and she was considered one of the canon of nine lyric poets. She helped invent songs in their present form.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bust_Sappho_Musei_Capitolini_MC1164.jpg/400px-Bust_Sappho_Musei_Capitolini_MC1164.jpg",
    lifespan: {
      birth: "circa 620 B.C.E.",
      death: "circa 570 B.C.E."
    }
  },
  { name: "Esther",
    title: "Queen",
    bio: "Esther was a Jewish queen of the Persian king Ahasuerus. She thwarted a genocide of her people.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Esther_haram.jpg/400px-Esther_haram.jpg",
    lifespan: {
      birth: "unknown, B.C.E.",
      death: "unknown, B.C.E."
    }
  },
  { name: "Hildegard",
    title: "Sybil",
    bio: "She was a German Benedictine abbess, writer, composer, philosopher, Christian mystic, visionary, and polymath. She is considered to be the founder of scientific natural history in Germany. She wrote theological, botanical, and medicinal texts, as well as letters, liturgical songs, and poems.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hildegard_von_Bingen.jpg/410px-Hildegard_von_Bingen.jpg",
    lifespan: {
      birth: "circa 1098 C.E.",
      death: "17 September 1179 C.E."
    }
  },
  { name: "Marie Curie",
    title: "Phsycist",
    bio: "She was the first woman to win a Nobel Prize, the first person and only woman to win twice, the only person to win twice in multiple sciences. She discovered radiation, and ushered in the Atomic Age.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/452px-Marie_Curie_c1920.jpg",
    lifespan: {
      birth: "7 November 1867 C.E.",
      death: "4 July 1934 C.E."
    }
  },
  { name: "Teresa",
    title: "Saint",
    bio: "She founded the Missionaries of Charity, which runs homes for people dying of HIV/AIDS, leprosy and tuberculosis; soup kitchens; dispensaries and mobile clinics; children's and family counselling programmes; orphanages; and schools. Members must adhere to the vows of chastity, poverty, and obedience, as well as a fourth vow, to give wholehearted free service to the poorest of the poor.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MotherTeresa_094.jpg/577px-MotherTeresa_094.jpg",
    lifespan: {
      birth: "26 August 1910",
      death: "5 September 1997"
    }
  },
  { name: "Margaret Thatcher",
    title: "Baroness",
    bio: 'She was the longest-serving British prime minister of the 20th century and the first woman to have held the office. A Soviet journalist dubbed her the "Iron Lady", a nickname that became associated with her uncompromising politics and leadership style.',
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Margaret_Thatcher.png/431px-Margaret_Thatcher.png",
    lifespan: {
      birth: "13 October 1925 C.E.",
      death: "8 April 2013 C.E."
    }
  }
];

var buildHere = document.getElementById("buildCardsHere");
var placeholder1 = '';

// 4. Create a DOM element for each of the objects inside the container. Style your person elements however you like.
for(let i =0; i < people.length; i++){
  placeholder1 += '<article class="person"><header><h4>';
  placeholder1 += people[i].title + '</h4><h3>';
  placeholder1 += people[i].name + '</h3></header><section><img src="';
  placeholder1 += people[i].imageURL + '" alt="A Person\'s Picture"><p>';
  placeholder1 += people[i].bio + '</p><p></p></section><footer><h5>';
  placeholder1 += people[i].lifespan.birth + ' - ' + people[i].lifespan.death + '</h5></footer></article>';
};
buildHere.innerHTML = placeholder1;

var persons = document.getElementsByClassName("person");
var userBio = document.getElementById("userBio");
var personBio;
userBio.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    userBio.value = '';
  } else {
    personBio.nextElementSibling.innerHTML = userBio.value;
  }
});
// 8. When you click on one of the person elements, a dotted border should appear around it.
// 9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// 10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// 11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function bioEar(event){
  userBio.value = '';
  for(let i = 0; i<persons.length;i++){
    persons[i].classList.remove("focussed");
  }
    personBio = event.currentTarget.getElementsByTagName("p")[0];
    event.currentTarget.classList.toggle("focussed");
    document.getElementById("userBio").focus();
}

// 5. For every even numbered element, have a light yellow background.
// 6. For every odd numbered element, have a light blue background.
for (let i= 0; i < persons.length; i++){
  if(i % 2 !== 0){
    persons[i].classList.toggle("oddChild");
  } else {
    persons[i].classList.toggle("evenChild");
  }
};

for(let i = 0; i < persons.length; i++){
  persons[i].addEventListener("click", bioEar);
};