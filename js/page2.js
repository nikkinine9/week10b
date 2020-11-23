var color = Cookies.get("color");
console.log(color);

Cookies.remove("color");
console.log(Cookies.get("color"));