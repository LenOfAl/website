window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
let items = [
  Ambitious,
  Amiable,
  Bold,
  Confident,
  Conscientious,
  Creative,
  Decisive,
  Dependable,
  Diligent,
  Enthusiastic,
  Dependable,
  Extrovert,
  Flexible,
  Friendly,
  Honest,
  Imaginative,
  Influencing,
  Inspirational,
  Leader,
  Loyal,
  Organized,
  Perceptive,
  Personable,
  Reliable,
  Resourceful,
  Versatile,
  Visionary,
];

function getAdjective() {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}
document.getElementById("me").innerHTML = getAdjective();
