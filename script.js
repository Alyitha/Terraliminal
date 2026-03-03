document.querySelectorAll('.item').forEach((el, i) => {
    el.style.animationDelay = (i * 5) + 's';
});