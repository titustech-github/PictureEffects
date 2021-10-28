function pictureEffects(options) {
    let images = document.querySelectorAll(".image-effects");

    images.forEach(image => {
        //image.style.boxShadow = options.shadow;

        if(options.shadow) {
            image.style.shadow = "10px 10px 5px rgba(0,0,0,0.1)"
        }else 
            image.style.shadow = "none"

        if(options.padding) {
            image.style.padding = "10px"
        }else 
            image.style.padding = "0px"
        
    
        if(options.border) {
            image.style.border = "1px solid red"
        }else 
            image.style.border = "0 none"
        
    }
}