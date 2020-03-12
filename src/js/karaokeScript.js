class Karaoke {
    constructor(song){
        this.song  = song;
        this.divSong = document.querySelector('#divSong');
        this.audio = document.getElementsByClassName('karaoke__audio')[0];
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
                    let loading = document.querySelector(".karaoke__bounceball");
                    let margin = `${marginIndex * index}px`;


                    this.divSong.style.marginTop = margin;

                    if (margin === "0px") {
                        loading.style.display = "none";
                    } else {
                        loading.style.display = "inline-block";
                    }

                    if (index !== currentIndex) {
                        this.divSong.children[index+1].classList.toggle("karaoke__textLine--current");
                        this.divSong.children[index].classList.remove("karaoke__textLine--current")
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

    playAgain () {
        let playerButton = document.querySelector("#playerButton");
        this.divSong.style.marginTop = "100px";
        this.isPlaying = false;
        playerButton.classList.toggle("karaoke__button--pause");
    }


}

export default Karaoke;