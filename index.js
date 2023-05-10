console.log("js ..loading")

fetch("http://localhost:3000/songs")
  .then(res => res.json())
  .then(songs => {
    songs.forEach((song) => {

      //songListMaker(song)
     createCardElement(song)
    })
  })

  const createCardElement = (song) => {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let h2 = document.createElement("h2")
    h2.textContent = song.name

    let h3 = document.createElement("h3")
    h3.textContent = song.artist

    let img = document.createElement("img")
    img.src = song.image
    img.classList.add("tubeLink")
  
    let pLikes = document.createElement("p")
    pLikes.textContent = `${song.likes} likes`

    let cardButton = document.createElement("button")

    //will come back to this when adding event listener to update likes
    cardButton.addEventListener('click', () => {
      pLikes.textContent = `${song.likes += 1} likes`
      updateLikes(song.id, song.likes)

     })

    cardButton.classList.add("like-btn");
    cardButton.id = song.id;
    cardButton.textContent = "Like ❤️";

    card.append(h2, h3, img, pLikes, cardButton)
    document.getElementById("song-collection").appendChild(card)
    //document.getElementById("card_container").appendChild("song-collection")

  }
  
  //function to updates likes (PATCH)
  function updateLikes(id, newNumberOfLikes) {
    fetch(`http://localhost:3000/songs/${id}`, { 
    method: "PATCH",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    
    body: JSON.stringify({
      "likes": newNumberOfLikes
    })
      })
    }

    //Creates a playlist of songs to play in the player
    const form = document.querySelector("#song-form")
    const playList = document.querySelector("playlist")
    const player = document.querySelector("#player")

    //adds eventlistener to the form
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      const formData = Object.fromEntries(new formData(e.target))
      
      displayPlaylist(song)
      form.reset()
    })