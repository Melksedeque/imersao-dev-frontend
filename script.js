const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const apiUrl = "http://localhost:3000/artists";

function requestApi(searchTerm) {
  const url = `${apiUrl}?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayResults(data);
    });
}

function displayResults(data) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImg = document.getElementById("artist-img");

  data.forEach((artist) => {
    artistName.innerText = artist.name;
    artistImg.src = artist.urlImg;
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    resultPlaylist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
