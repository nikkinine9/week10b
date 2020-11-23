Cookies.set("color");

var color = document.getElementById("color");
var result = "<h2>Your Languages</h2>";
result += "<ul> n";

for (i = 0; i < color.length; i++) {
    currentOption = color[i];
}

if (currentOption.selected == true) {
    result += " <li>" + currentOption.value + "</li> n";
    result += "</ul> n";
    output = document.getElementById("output");
    output.innerHTML = result;
}

function showChoices() {
    var color = document.getElementById("color");
    var result = "<h2>Your Languages</h2>";
    result += "<ul> n";
    for (i = 0; i < color.length; i++) {
        currentOption = color[i];
        if (currentOption.selected == true) {
            result += " <li>" + currentOption.value + "</li> n";
        }
    }

    result += "</ul> n";
    output = document.getElementById("output");
    output.innerHTML = result;
}