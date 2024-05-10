const images = [
    "./img/001.jpg",
    "./img/002.jpg",
    "./img/003.jpg",
    "./img/004.jpg",
    "./img/005.jpg",
    "./img/006.jpg",
]


let lastX = 0;
let lastY = 0;
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    if (Math.abs(x - lastX) > 150 || Math.abs(y - lastY) > 100) {
        let diffX = x - lastX;
        let diffY = y - lastY;
        lastX = x;
        lastY = y;
        addNewImage(x, y, -diffX, -diffY);
    }
})

let index = 0;

function addNewImage(x, y, diffX, diffY) {
    const image = document.createElement("img");
    image.src = images[index];
    image.style.left = x + "px";
    image.style.top = y + "px";
    image.style.transform = `translate(${diffX}px, ${diffY}px)`;
    document.body.append(image);
    image.classList.add("fadeIn");

    index = index === images.length - 1 ? 0 : index + 1;

    setTimeout(() => {
        image.classList.add("fadeOut");
        setTimeout(() => {
            image.remove();
        }, 500);
    }, 500);
}