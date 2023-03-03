// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moon}</li>
                </ol>
                <img src="${imageurl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
      } else if (isNaN(testInput)) {
        return "Not a Number";
      } else {
        return "Is a Number";
      }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
  
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
      alert("All fields are required!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
      alert("Fuel Level and Cargo Mass must be valid numbers!");
    } else {
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  
      if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
      } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
      }
  
      if (cargoMass > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
      } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
  
      if (fuelLevel >= 10000 && cargoMass <= 10000) {
        faultyItems.style.visibility = "hidden";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
      }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
