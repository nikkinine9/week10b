var button = document.querySelector("button");
button.addEventListener("click", function() {
    var name = document.querySelector("input").value;

    Cookies.set("name", name);

    location.href = "page2.html";
});