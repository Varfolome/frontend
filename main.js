let img = document.getElementById("AdaptiveImage");
let container = document.getElementsByClassName("image");

console.log(img.width);
console.log(img.height);

const image_h = img.height;
const image_w = img.width;
const container_w = container[0].clientWidth;
let new_image_h = (image_h / image_w) * container_w;

let cws = container_w.toString() + "px";
console.log(cws);


img.style.width = cws;
//img.style.height = new_image_h.toString();

console.log(img.width);
console.log(img.height);