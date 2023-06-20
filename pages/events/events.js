//Needs to be here, because reading from a json file gives a cors error
const data = {
    events: [{
        title: "Dorffest Westerhausen",
        timestamp: 1687098600,
        date: "18. June",
        time: "16:30 Uhr - 19:30 Uhr",
        address: "Sportplatz Westernhausen, 74214 Schöntal, Baden-Württemberg, Deutschland",
    }, {
        title: "Rockparty Oberkessach",
        timestamp: 1687618800,
        date: "24. June",
        time: "17:00 Uhr - 18:30 Uhr",
        address: "Merchinger Straße 10, 74214 Schöntal, Baden-Württemberg, Deutschland",
    }, {
        title: "Sportfest Rosenberg",
        timestamp: 1688313600,
        date: "02. July",
        time: "18:00 Uhr - 22:00 Uhr",
        address: "Sportgelände Rosenberg, 74749 Rosenberg, Baden-Württemberg, Deutschland",
    }, {
        title: "Hiking Tour", timestamp: 1688886000, date: "09. July", time: "09:00 Uhr - 20:00 Uhr", address: ""
    }, {
        title: "Christmas Tree Sale",
        timestamp: 1702738800,
        date: "16. December",
        time: "16:00 Uhr - 22:00 Uhr",
        address: "Merchinger Straße 10, 74214 Schöntal, Baden-Württemberg, Deutschland"
    }]
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function fetchJsonData() {
    try {
        return data;
        //TODO: Get rid of cors error so that the json can be read from the data file
        /*
            return fetch(data.json, {
            method: "GET",
            mode: 'cors',
            headers: {'Content-Type': 'application/json',}
        }).then(response => response.json()); */
    } catch (error) {
        console.log('Error fetching JSON data:', error);
    }
}

async function search_event() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    const eventList = document.getElementById('data-list');
    eventList.innerHTML = "";

    console.log("Searchbar input: " + input);

    const data = await fetchJsonData();

    let previousDate = null;

    for (let i = 0; i < data.events.length; i++) {
        let event = data.events[i];

        if (event.title.toLowerCase().includes(input)) {
            console.log("Event found: " + event.title);
            const date = getDate(event);
            const eventDiv = createEventDiv(date, previousDate, event);
            eventList.appendChild(eventDiv);

            previousDate = date;
        }
    }
}

document.getElementById("searchbar-form").addEventListener("submit", (e) => {
    e.preventDefault();

    search_event();
});

async function displayEvents() {
    const eventList = document.getElementById('data-list');
    const jsonData = await fetchJsonData();

    // Clear any existing data
    eventList.innerHTML = '';

    // Sort the events after time and display them
    let previousDate = null;

    jsonData.events.sort((a, b) => a.timestamp - b.timestamp)
    jsonData.events.forEach(event => {
        const date = getDate(event);

        const eventListItem = createEventDiv(date, previousDate, event);

        eventList.appendChild(eventListItem);

        previousDate = date;
    });
}

function getDate(event) {
    return new Date(event.timestamp * 1000);
}

function createEventDiv(date, previousDate, event) {
    const eventDiv = document.createElement('div');
    eventDiv.setAttribute('class', 'eventDiv');

    const dateDiv = createDateDiv(date);

    const titleAndInfoDiv = createTitleAndInfoDiv(event);

    eventDiv.append(dateDiv, titleAndInfoDiv);

    const eventListItem = document.createElement('li');

    if (previousDate == null || (date.getMonth() > previousDate.getMonth() && date.getFullYear() >= previousDate.getFullYear())) {
        const month = document.createElement('h2');
        month.textContent = monthStrings[date.getMonth()] + " " + date.getFullYear();
        eventListItem.append(month, document.createElement('hr'));
    }

    eventListItem.appendChild(eventDiv);

    return eventListItem;
}

function createDateDiv(date) {
    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'dateDiv');

    const weekday = document.createElement('h6');
    weekday.setAttribute('class', 'eventWeekday');
    weekday.textContent = weekdays[date.getDay()];

    const dayOfMonth = document.createElement('h3');
    dayOfMonth.setAttribute('class', 'date');
    dayOfMonth.textContent = date.getDate().toString();

    dateDiv.append(weekday, dayOfMonth);

    return dateDiv;
}

function createTitleAndInfoDiv(event) {
    const titleAndInfoDiv = document.createElement('div');
    titleAndInfoDiv.setAttribute('class', 'eventTitleAndInfoDiv');

    const title = document.createElement('h4');
    title.setAttribute('class', 'eventTitle');
    title.textContent = event.title;

    const infos = document.createElement('p');
    //infos.setAttribute('class', 'eventInfo');
    infos.innerHTML = event.time + "<br>" + event.address;

    titleAndInfoDiv.append(title, infos);

    return titleAndInfoDiv;
}

(async () => {
    await displayEvents();
})();