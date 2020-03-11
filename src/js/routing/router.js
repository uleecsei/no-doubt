import { initSlider, initKaraoke, scrollBlocks } from "../helpers.js";
import { doNotSpeak } from "../songs";

export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById("root");
        window.addEventListener("hashchange", () => this.hasChanged(this));
        if (window.location.hash) {
            this.hasChanged(this);
        } else {
            routes
                .filter(route => route.default)
                .forEach(route => this.goToRoute(route.htmlName));
        }
    }

    hasChanged(scope) {
        scope.goToRoute(
            scope.routes.filter(
                route => "#" + route.name == window.location.hash
            )[0].htmlName
        );
    }

    async goToRoute(htmlName) {
        const url = "src/html/" + htmlName;

        await fetch(url)
            .then(response => response.text())
            .then(text => (this.rootElem.innerHTML = text));

        window.location.hash = htmlName.split(".")[0];

        if (htmlName === "main.html") {
            let slider = initSlider(document.querySelector(".slider"));

            initKaraoke(doNotSpeak);
        }

        if (htmlName === "allapage.html") {
            scrollBlocks(); 
        }
    }
}
