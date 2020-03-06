import {doNotSpeak} from "./songs";

window.onload = function() {
    let currentSong = new Karaoke(doNotSpeak);
    let playerButton = document.querySelector("#playerButton");
    currentSong.addLyricsInDom();
    currentSong.audio.onplaying = function(){currentSong.scrollText()};
    playerButton.addEventListener("click", function(){currentSong.changePlayState()});
};

function playSong () {

}


class Karaoke {
    constructor(song){
        this.song  = song;
        this.divSong = document.querySelector('#divSong');
        this.audio = document.querySelector('#audio');
        this.isPlaying = false;
    }

    addLyricsInDom(){

        this.song.map((item, i) => {
            let element = document.createElement('p');
            element.innerHTML = item.text;
            element.classList.add("karaoke__textLine");
            this.divSong.appendChild(element);
        })
    }

    scrollText() {
        let marginIndex = -100;
        let currentIndex;

        this.audio.ontimeupdate = (e) => {
            this.song.forEach((element, index) => {
                    if (e.target.currentTime >= element.start && e.target.currentTime <= element.end) {
                            let margin = `${marginIndex * (index-1)}px`;
                            this.divSong.style.marginTop = margin;
                            if(index>0 && index !== currentIndex){
                                this.divSong.children[index].classList.toggle("karaoke__textLine--current");
                                this.divSong.children[index-1].classList.remove("karaoke__textLine--current")
                                currentIndex = index;
                            }
                    }

                })

        }
    }

    changePlayState () {
        let playerButton = document.querySelector("#playerButton");
        if(this.isPlaying){
                this.audio.pause();
                this.isPlaying = false;
                playerButton.classList.toggle("karaoke__button--pause");
            }else{
                this.audio.play();
                this.isPlaying = true;
                playerButton.classList.toggle("karaoke__button--pause");
        }
    }

}