console.log("js loading...")
fetch("http://localhost:3000/songs")
  .then(res => res.json())
  .then(songs => {
    songs.forEach((song) => {

      //songListMaker(song)
     // createCardElement(song)
    })
  })

  const createCardElement = (song) => {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let h2 = document.createElement("h2")
    h2.textContent = song.name
  }