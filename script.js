window.alert("Incoming message");

document.querySelectorAll('.item').forEach((el, i) => {
    el.style.animationDelay = (i * 5) + 's';
});

setTimeout(() => {
    window.location.href = "index.html";
}, 30000);