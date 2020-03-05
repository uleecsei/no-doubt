import {doNotSpeak} from "./songs";

window.onload = function() {
    let currentSong = new Karaoke(doNotSpeak);
    currentSong.addLyricsInDom();
};


class Karaoke {
    constructor(song){
        this.song  = song;
    }

    addLyricsInDom(){

        this.song.map((item, i) => {
            let divSong = document.querySelector('#divSong');
            let element = document.createElement('li');
            let elementInner = document.createElement('span');
            elementInner.innerHTML = item.text;
            element.appendChild(elementInner);
            divSong.appendChild(element);
        })
    }

}