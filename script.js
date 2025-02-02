const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const apiUrl = "http://localhost:3000/artists";

function requestApi(searchTerm) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredResults = data.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm)
      );
      displayResults(filteredResults);
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
