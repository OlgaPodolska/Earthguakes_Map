// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// We create the tile layer that will be the background of our map the code from the assignment.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   // maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    //accessToken: API_KEY
//});


// We create the tile layer that will be the dark background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',    
maxZoom: 18,    
accessToken: API_KEY
}); 

// An array containing each city's location, state, and population.
let cities = [{
     location: [40.7128, -74.0059],
     city: "New York City",
     state: "NY",
     population: 8398748
   },
   {
     location: [41.8781, -87.6298],
     city: "Chicago",
     state: "IL",
     population: 2705994
   },
   {
     location: [29.7604, -95.3698],
     city: "Houston",
     state: "TX",
     population: 2325502
   },
   {
     location: [34.0522, -118.2437],
     city: "Los Angeles",
     state: "CA",
     population: 3990456
   },
   {
     location: [33.4484, -112.0740],
     city: "Phoenix",
     state: "AZ",
     population: 1660272
   }
];

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
     console.log(city)
});

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
     console.log(city)
     L.marker(city.location).addTo(map);
 });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);


// Add a circle around center of Los Angeles
//L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Add a grey 300-picsel circle in black borders around center of Los Angeles
//L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#fffa1'
//}).addTo(map);





// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);