const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {
    author: "Lauren",
    poem: "Roses are red \n Violets are blue \n Why do you laugh? \n Am I a joke to you?",
    image: "roses.jpg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {
    author: "Martin",
    poem: "Roses are red \n Violets are blue \n Why do you laugh? \n Am I a joke to you?",
    image: "flower-martin.jpg"
  },
  {
    author: "Harman",
    poem: "Roses are red \n Violets are blue \n It's raining in vancouver \n tell me something new",
    image: "http://images.dailyhive.com/20161014085500/vancouver-rain-storm-gastown.jpg"
  },
  {
    author: "Christian",
    poem: "Roses are red \n Violets are blue \n  \n Blade is a good movie",
    image: "gizmo.jpg",
  }
  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
