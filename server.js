const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Welcome to the Beyoncé albums!");
});

// 3.1) Get All Albums
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "12",
    artistName: "Beyoncé",
    collectionName: "In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.status(200).send({ albumsData });
});

// 3.2) Get Album by ID
app.get("/albums/:albumId", function (req, res) {
  const idToFind = req.params.albumId;
  const album = albumsData.find((album) => album.albumId === idToFind);
  res.status(200).send({ album });
});

// 3.4) Add a New Album

app.use(express.json());

app.post("/albums", function (req, res) {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.status(201).send({ newAlbum });
});

// 3.5) Delete an album
app.delete("/albums/:albumId", function (req, res) {
  const idToDel = req.params.albumId;
  const indexToDel = albumsData.findIndex(
    (album) => album.albumId === idToDel
  );
  if (indexToDel >= 0){
    albumsData.splice(indexToDel, 1)
  }
  res.status(200).send({ albumsData });
});

app.listen(PORT, function (req, res) {
  console.log("Server is running on port 3000...");
});
