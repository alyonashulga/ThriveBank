// cursor.js
document.addEventListener("DOMContentLoaded", function () {
    const cursorEffect = document.createElement("div");
    cursorEffect.classList.add("cursor-effect");
    document.body.appendChild(cursorEffect);

    document.addEventListener("mousemove", function (e) {
        cursorEffect.style.left = e.pageX + "px";
        cursorEffect.style.top = e.pageY + "px";
        cursorEffect.style.opacity = 1; // Show the circle
    });

    document.addEventListener("mouseout", function () {
        cursorEffect.style.opacity = 0; // Hide the circle when mouse leaves
    });
});
