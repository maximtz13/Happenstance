

// auth_token constructor
class EventBrite {
    constructor() {
        this.auth_token = 'RVWBZULHJRHE764JXAPZ';
        this.orderby = 'date';
    }

// get events from API

    async eventsAPI(eventName, category) {
        var eventsResponse = await fetch("");

        var events = await eventsResponse.json();

        return events;
        
    }

// get categories from API

    async getCategoriesAPI() {
        var categoriesResponse = await fetch("https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}");

        var categories = await categoriesResponse.json();

        return categories;
    }

}

// category search constructor
class searchData {
    constructor() {
        this.init();
    }
    init(){
        // display categories in <options>
        this.printCategories();
    }
    printCategories() {
        var categoriesList = eventBrite.getCategoriesAPI()
            .then(categories => {
                console.log(categories);
            })
    }

};

class searchData {
    constructor(){
        this.init();
    }
    init(){
        this.printCategories();
        this.result = document.getElementById("result");
    }

    displayEvents(events){
        let HTMLTemplate = "";

        events.forEach(eventInfo => {
            
            
        });
    }
}

var eventBrite = new EventBrite();
var searchdata = new searchData();

document.getElementById("search-btn").addEventListener("click", (event) => {
    event.preventDefault();

    var eventName = document.getElementById("event-name").value;
    var category = document.getElementById("category").value;

    if(eventName !=='') {
        eventBrite.queryAPI(eventName, category)
        .then(events => {
            var eventsList = events.events.events;
            if(events.lenth > 0) {
                ui.displayEvents(eventsList);
            } else {
                ui.printMessage("Your search came up empty!");
            }
        })
    } else {
        ui.printMessage('Add an Event or City');
    }
})








