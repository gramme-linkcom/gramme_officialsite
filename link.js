window.onload = onLoad;

function onLoad() {
    link = document.getElementById('base');
    let root = "gramme.f5.si"
    link.setAttribute('href', "https://"+root);

    console.log("completed rewrite")
}
