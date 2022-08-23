import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "When You're Gone",
      artist: "Shawn Mendes",
      album: "When You're Gone",
      track: "When You're Gone",
      year: "2022",
      img_src: "./songs_images/shawn.jpg",
      src: "./songs/When you're gone.mp3",
    },
    {
      title: "We Don't Talk Anymore",
      artist: "Charlie Puth, Salena Gomez",
      album: "Nine Track Mind",
      track: "We Don't Talk Anymore",
      year: "2016",
      img_src: "./songs_images/Charlie.jpeg",
      src: "./songs/We Don't Talk Anymore.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
