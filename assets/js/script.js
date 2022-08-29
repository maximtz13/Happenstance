// auth_token constructor
class EventBrite {
    constructor() {
        this.auth_token = 'GEVRMXX4A3AW2G3VRR';
    }
};

// category search constructor

var eventBrite = new EventBrite();


;
// listener for search button
document.getElementById("search-btn").addEventListener("click", (event) => {
    var eventName = document.getElementById("event-name").value;

    console.log(eventName);
});



