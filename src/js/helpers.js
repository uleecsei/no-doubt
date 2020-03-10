import Slider from "./slider.js";
import Karaoke from "./karaokeScript.js";

export const initSlider = container => new Slider(container);

export const initKaraoke = song => {
    let currentSong = new Karaoke(song);

    let playerButton = document.querySelector("#playerButton");

    let audio = document.getElementById("audio");

    currentSong.addLyricsInDom();

    currentSong.audio.onplaying = function() {
        currentSong.scrollText();
    };

    playerButton.addEventListener("click", function() {
        currentSong.changePlayState();
    });

    audio.addEventListener("ended", function() {
        currentSong.playAgain();
    });
};
