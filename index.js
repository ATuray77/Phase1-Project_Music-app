console.log("js loading...")
fetch("http://localhost:3000/songs")
  .then(res => res.json())
  .then(songs => {
   // songs.forEach((song) => {

      //songListMaker(song)
     // createCardElement(song)
    })
  })
