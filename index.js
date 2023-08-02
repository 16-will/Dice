// First Image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1Element = document.querySelector(".img1");
img1Element.setAttribute("src", `images/dice${randomNumber1}.png`);

// Second Image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2Element = document.querySelector(".img2");
img2Element.setAttribute("src", `images/dice${randomNumber2}.png`);

// Update Winner
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins!";
} else {
    heading.textContent = "Draw!";
}