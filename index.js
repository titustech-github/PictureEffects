function pictureEffects(options) {
    let images = document.querySelectorAll(".image-effects");

    if(options.shadow) {
        options.shadow = "10px 10px 5px rgba(0,0,0,0.1)"
    }else {
        options.shadow = "none"
    }

    if(options.padding) {
        options.padding = "10px 10px 5px rgba(0,0,0,0.1)"
    }else {
        options.padding = "0px"
    }

    if(options.border) {
        options.border = "1px solid red"
    }else {
        options.border = "0 none"
    }
}