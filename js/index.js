function si() {
    alert('Ahora ya somos novios bb 🧡🥰🥰')
}
function mover() {
    width = window.innerWidth;
    height = window.innerHeight;
    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);
    document.getElementById('btnno').style.position = "absolute";
    document.getElementById('btnno').style.left = newWidth + "px";
    document.getElementById('btnno').style.top = newHeight + "px";
}