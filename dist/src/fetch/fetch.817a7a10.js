"use strict";
var catResult = document.querySelector('#catResult');
var dogResult = document.querySelector('#dogResult');
var catBtn = document.querySelector('#catBtn');
var dogBtn = document.querySelector('#dogBtn');
var divAbout = document.querySelector('.about');
var getRandomCat = function getRandomCat() {
    fetch('https://randomfox.ca/floof/').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log('fox data: ', data);
        catResult.innerHTML = "<img src=\"".concat(data.image, "\">");
    });
};
var getRandomDog = function getRandomDog() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log('bear data: ', data);
        dogResult.innerHTML = "<img src=\"".concat(data.image_link, "\">");
        divAbout.innerHTML = "\n          <p>Name: ".concat(data.name, "</p>\n          <p>Latin Name: ").concat(data.latin_name, "</p>\n          <p>Animal Type: ").concat(data.animal_type, "</p>\n          <p>Active Time: ").concat(data.active_time, "</p>\n          <p>Habitat: ").concat(data.habitat, "</p>\n          <p>Diet: ").concat(data.diet, "</p>\n          <p>Geo Range: ").concat(data.geo_range, "</p>\n      ");
    });
};
catBtn.addEventListener('click', getRandomCat);
dogBtn.addEventListener('click', getRandomDog);

//# sourceMappingURL=fetch.817a7a10.js.map
