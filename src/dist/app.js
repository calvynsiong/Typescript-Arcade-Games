var someElement = document.querySelector(".foo");
someElement.addEventListener("click", function (e) {
    var target = e.target;
    console.log("event", target);
});
