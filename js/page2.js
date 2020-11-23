var name = Cookies.get("name");
if ("name") {
    var heading = document.querySelector("h1");
    heading.innerText = name;
}