console.log("js ..loading");

//fetch request for all songs resources
fetch("http://localhost:3000/songs")
  .then((res) => res.json())
  .then((songs) => {
    songs.forEach((song) => {
      createCardElement(song);
    });
  });

const createCardElement = (song) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let h2 = document.createElement("h2");
  h2.textContent = song.name;
  h2.style.color ="ForestGreen"

  let h3 = document.createElement("h3");
  h3.textContent = song.artist;
  h3.style.color = "FireBrick"

  let h4 = document.createElement("h4");
  h4.textContent = `Youtube ID:  ${song.youtubeID}`
  h4.style.color = "Olive"

  // let img = document.createElement("img");
  // img.src = song.src;
  // img.classList.add("tubeLink");

  let pLikes = document.createElement("p");
  pLikes.textContent = `${song.likes} likes`;

  let cardButton = document.createElement("button");

  //Adds an event listener to the card button with a callback that increases
  cardButton.addEventListener("click", () => {
    pLikes.textContent = `${(song.likes += 1)} likes`;
    updateLikes(song.id, song.likes);
  });

  cardButton.classList.add("like-btn");
  cardButton.id = song.id;
  cardButton.textContent = "Like ❤️";

  card.append(h2, h3, h4, pLikes, cardButton);
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
const form2 = document.querySelector("form#song-form-2");
form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target))
  


  sendToDB(formData);  //everything works up to here
  displayPlaylist(formData);

  form.reset();
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
      "likes": 0
    })
  }).then((res) => res.json())
    .then(resSong => createCardElement(resSong))
 }
//Everything works above, now working on below

 //function to display Playlist
 const form = document.querySelector("form#song-form")
 form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target))

    displayPlaylist(formData);
    form.reset();
 });



 function displayPlaylist(song) {
  const span = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  //grabs song name and artist name from input
  span.textContent = `${song.name} - ${song.artist}`;
  deleteBtn.textContent = "🗑️";
  //adds event listener to the span
  li.addEventListener("click", () => {
    player.src = `https://www.youtube.com/embed/${song.youtubeID}`;
  });
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm("Do you want to remove this song from playlist?"))
        e.target.parentNode.parentNode.remove();
    });

    span.appendChild(deleteBtn);
    li.appendChild(span);
    playlist.appendChild(li);
 }