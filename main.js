mostrarImagenes = () => {
    document.getElementById("GaleriaVideos").style.display = "none";
    document.getElementById("galeriaImagenes").removeAttribute("style");
    document.getElementById("videos").removeAttribute("class");
    document.getElementById("imagenes").setAttribute('class', 'active');
}

mostrarVideos = () => {
    document.getElementById("galeriaImagenes").style.display = "none";
    document.getElementById("GaleriaVideos").removeAttribute("style");
    document.getElementById("imagenes").removeAttribute("class");
    document.getElementById("videos").setAttribute('class', 'active');
}