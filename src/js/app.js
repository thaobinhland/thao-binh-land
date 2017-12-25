import Siema from "siema";

if (document.querySelector(".siema")) {
    const corousel = new Siema({
        selector:     ".siema",
        duration:     400,
        easing:       "ease-out",
        perPage:      1,
        startIndex:   0,
        draggable:    false,
        multipleDrag: false,
        threshold:    20,
        loop:         true,
        onInit:       () => {
        },
        onChange:     () => {
        },
    });

    setInterval(function () {
        corousel.next();
    }, 8000);
}

if (document.querySelector('.main-carousel')) {
    var Flickity = require('flickity');
    new Flickity('.main-carousel', {
        cellAlign:       'left',
        setGallerySize:  true,
        imagesLoaded:    true,
        contain:         true,
        pageDots:        true,
        prevNextButtons: true
    });
}

// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}

