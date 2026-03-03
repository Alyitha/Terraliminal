const element = document.getElementById("glitchtext");
const originalText = element.textContent;
const letters = "OPPTrrahccieeelusn";

function glitch() {
    let textArray = originalText.split("");

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * textArray.length);
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        textArray[randomIndex] = randomLetter;
    }

    element.textContent = textArray.join("");

    setTimeout(() => {
        element.textContent = originalText;
    }, 400);
}

setInterval(glitch, 3000);