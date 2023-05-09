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

    let img = document.createElement("img")
    img.src = song.image
    img.classList.add("tubeLink")
  
    let pLikes = document.createElement("p")
    pLikes.textContent = `${song.likes} likes`

    let cardButton = document.createElement("button")

    //will come back to this when adding event listener to update likes
    // cardButton.addEventListener('click', () => {

    // })
    cardButton.classList.add("like-btn");
    cardButton.id = song.id;
    cardButton.textContent = "Like ❤️";

    card.append(h2, img, cardButton)
    document.getElementById("song-collection").appendChild(card)


  }
  