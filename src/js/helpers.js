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

export const scrollBlocks = () => {

    let block = document.querySelector(".artistBlock");

    block.addEventListener("wheel", onWheel)

        function onWheel (e) {
        e = e || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        var prevPosition = 0;
        var duration = "";
        if (prevPosition < delta) {
            duration = "down";
        } else {
            duration = "up";
        }

        if (duration === "down") {
            document.querySelector(".photo-block__immage").style.marginLeft = "-50%"
            document.querySelectorAll(".description__top").forEach(e => { e.style.marginTop = "-50%" })
        } else if (duration === "up") {
            document.querySelector(".photo-block__immage").style.marginLeft = "0"
            document.querySelectorAll(".description__top").forEach(e => { e.style.marginTop = "0" })
        }
    }

}