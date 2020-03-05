import {doNotSpeak} from "./songs";

window.onload = function() {
    let currentSong = new Karaoke(doNotSpeak);
    currentSong.addLyricsInDom();
    currentSong.audio.onplaying = function(){currentSong.scrollText()};
};


class Karaoke {
    constructor(song){
        this.song  = song;
        this.divSong = document.querySelector('#divSong');
        this.audio = document.querySelector('#audio');
    }

    addLyricsInDom(){

        this.song.map((item, i) => {
            let element = document.createElement('li');
            let elementInner = document.createElement('span');
            elementInner.innerHTML = item.text;
            element.appendChild(elementInner);
            this.divSong.appendChild(element);
        })
    }

    scrollText() {
        let marginIndex = -10;
        let previousIndex;
        this.audio.ontimeupdate = (e) => {
            this.song.forEach((element, index)=>{
                if (e.target.currentTime >= element.start && e.target.currentTime <= element.end) {
                if (index >= 2 && index != previousIndex) {
                    let margin  = `${marginIndex*previousIndex}px`;
                    this.divSong.style.marginTop = margin;
                }
                previousIndex = index;
            }
        })
        }
    }



}