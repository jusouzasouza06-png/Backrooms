const keys = {};

document.getElementById("up").ontouchstart = () => keys.up = true;
document.getElementById("up").ontouchend = () => keys.up = false;

document.getElementById("down").ontouchstart = () => keys.down = true;
document.getElementById("down").ontouchend = () => keys.down = false;

document.getElementById("left").ontouchstart = () => keys.left = true;
document.getElementById("left").ontouchend = () => keys.left = false;

document.getElementById("right").ontouchstart = () => keys.right = true;
document.getElementById("right").ontouchend = () => keys.right = false;