var searchFormEl = document.querySelector("#form");
var searchInputEl = document.querySelector("#submit-btn")

var getEventInfo = function (){
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=HKJWQyMTLdPzH3sRY96rdBRW592duqZq").then(function(response){
        response.json().then(function(data) {
            console.log(data);
        })
    });
    
};

var formSubmitHandler = function(event){
    event.preventDefault();
    
    var search = searchInputEl.value.trim();

    if (value) {
        getEventInfo(value);
        searchInputEl.value = "";
    }
        else {
            alert("Please enter a search term.");
        }
};


searchInputEl.addEventListener("submit", formSubmitHandler);

getEventInfo();