var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});


window.addEventListener('scroll', () => {
    const element = document.getElementById("topheader");
    if(window.scrollY > 15) {
        element.style.backgroundColor = `rgb(${215 + window.scrollY/15}, ${222 + window.scrollY/15}, ${227 + window.scrollY/15})`;
        // element.style.height = "100px";
    } else {
        element.style.background = "#D7DEE3";
        // element.style.height = "130px";
    }
})

document.body.scrollWidth 

window.addEventListener( 'resize', () => {

    const element = document.getElementById("signature");

    if(document.body.scrollWidth<= 850){

        element.setAttribute("src","./assets/images/head/logo_assinatura_02.png")
    }
    else{
        element.setAttribute("src","./assets/images/head/LOGO_SITE.png")
    }

});