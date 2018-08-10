import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let template = ''

  for (let i = 0; i < results.length; i++) {
    const song = results[i];
    template += `
    <div class="col-3">
    <div class="card-body" style="outline: 1px solid black" class="col-3">
        <img class="card-img-top" src="${song.albumArt}" alt="album art">
        <h5 class="card-title ">${song.title}</h5>
        <p>${song.artist}</p>
        <p>${song.collection}</p>
        <p>${song.price}</p>


        <a href="# " class="btn btn-primary ">purchase</a>
        <audio controls>
            <source src="${song.preview}" type="">

        </audio>
    </div>
</div>
    `
  }
  //  song attributes 
  // this.title
  // this.albumArt
  // t
  // his.artist
  // this.collection
  // this.price
  // this.preview


  document.getElementById('songs').innerHTML = template


}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }



}
export default ItunesController
