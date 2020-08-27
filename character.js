let url = new URLSearchParams(window.location.search);
//console.log(url);

if (url.has("id")) {
    //console.log(url.get("id"));
    fetch(`http://swapi.dev/api/people/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {
            //console.log(data);
            document.querySelector("h1").innerText = data.name;
            document.querySelector(".birth_year").innerText = data.birth_year;
            document.querySelector(".gender").innerText = data.gender;
            document.querySelector(".eye_color").innerText = data.eye_color;
            document.querySelector(".height").innerText = data.height;
            document.querySelector(".mass").innerText = data.mass;
            document.querySelector(".skin_color").innerText = data.skin_color;
            //document.querySelector(".hometown").innerText = data.homeworld.get.url("https://swapi.dev/api/planets/1/")
        })
    fetch(`https://swapi.dev/api/planets/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {
            //console.log(data);
            document.querySelector(".homeworld").innerHTML = data.name;
        })
}