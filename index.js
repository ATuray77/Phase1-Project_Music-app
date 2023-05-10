console.log("js ..loading");

//fetch request for all songs resources
fetch("http://localhost:3000/songs")
  .then((res) => res.json())
  .then((songs) => {
    songs.forEach((song) => {
      //songListMaker(song)
      createCardElement(song);
    });
  });

const createCardElement = (song) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let h2 = document.createElement("h2");
  h2.textContent = song.name;

  let h3 = document.createElement("h3");
  h3.textContent = song.artist;

  let img = document.createElement("img");
  img.src = song.image;
  img.classList.add("tubeLink");

  let pLikes = document.createElement("p");
  pLikes.textContent = `${song.likes} likes`;

  let cardButton = document.createElement("button");

  //will come back to this when adding event listener to update likes
  cardButton.addEventListener("click", () => {
    pLikes.textContent = `${(song.likes += 1)} likes`;
    updateLikes(song.id, song.likes);
  });

  cardButton.classList.add("like-btn");
  cardButton.id = song.id;
  cardButton.textContent = "Like ❤️";

  card.append(h2, h3, img, pLikes, cardButton);
  document.getElementById("song-collection").appendChild(card);
  //document.getElementById("card_container").appendChild("song-collection")
};

//function to updates likes (PATCH)
function updateLikes(id, newNumberOfLikes) {
  fetch(`http://localhost:3000/songs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      likes: newNumberOfLikes,
    }),
  });
}

//TO ADD A NEW SONG: first adds an event listener to form
const form = document.querySelector("form#song-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target))


  sendToDB(formData);
  displayPlaylist();
});

//function to make a POST
function sendToDB(newSong) {
  fetch("http://localhost:3000/songs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...newSong,
      "Likes": 0
    })
  }).then((res) => res.json()
  )
  .then(resSong => createCardElement(resSong))
 }

 //function to display Playlist
 function displayPlaylist(song) {
  const span = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  //grabs song name and artist name from input
  span.textContent = `${song.name} - ${song.artist}`;
  deleteBtn.textContent = "🗑️";
 }