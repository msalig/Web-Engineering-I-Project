const data = {
    events: [{
        uuid: 1,
        title: "Dorffest Westerhausen",
        timestamp: 1687098600,
        date: "18. Juni",
        time: "16:30 Uhr - 19:30 Uhr",
        address: "Sportplatz Westernhausen, 74214 Schöntal, Baden-Württemberg, Deutschland",
        description: ""
    }, {
        uuid: 2,
        title: "Rockparty Oberkessach",
        timestamp: 1687618800,
        date: "24. Juni",
        time: "17:00 Uhr - 18:30 Uhr",
        address: "Merchinger Straße 10, 74214 Schöntal, Baden-Württemberg, Deutschland",
        description: ""
    }, {
        uuid: 3,
        title: "Sportfest Rosenberg",
        timestamp: 1688313600,
        date: "02. Juli",
        time: "18:00 Uhr - 22:00 Uhr",
        address: "Sportgelände Rosenberg, 74749 Rosenberg, Baden-Württemberg, Deutschland",
        description: ""
    }]
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function fetchJsonData() {
    try {
        return data;
        //TODO: Get rid of cors error
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

async function displayEvents() {
    const dataList = document.getElementById('data-list');
    const jsonData = await fetchJsonData();

    // Clear any existing data
    dataList.innerHTML = '';

    // Sort the events after time and display them
    let previousEventDate = null;

    jsonData.events.sort((a, b) => a.timestamp - b.timestamp)
    jsonData.events.forEach(event => {
        const date = new Date(event.timestamp * 1000);

        const eventDiv = document.createElement('div');
        eventDiv.setAttribute('class', 'eventDiv');

        const dateDiv = document.createElement('div');
        dateDiv.setAttribute('class', 'dateDiv');

        const weekday = document.createElement('h6');
        weekday.setAttribute('class', 'eventWeekday');
        weekday.textContent = weekdays[date.getDay()];

        const dayOfMonth = document.createElement('h3');
        dayOfMonth.setAttribute('class', 'date');
        dayOfMonth.textContent = date.getDate().toString();

        dateDiv.append(weekday, dayOfMonth);

        const titleMessageDiv = document.createElement('div');
        titleMessageDiv.setAttribute('class', 'eventTitleMessageDiv');

        const title = document.createElement('h4');
        title.setAttribute('class', 'eventTitle');
        title.textContent = event.title;

        const description = document.createElement('p');
        description.setAttribute('class', 'eventDescription');
        description.textContent = event.address;

        titleMessageDiv.append(title, description);

        eventDiv.append(dateDiv, titleMessageDiv);

        const listItem = document.createElement('li');
        if (previousEventDate == null || (date.getMonth() > previousEventDate.getMonth() && date.getFullYear() >= previousEventDate.getFullYear())) {
            const month = document.createElement('h2');
            month.textContent = monthStrings[date.getMonth()] + " " + date.getFullYear();
            listItem.append(month, document.createElement('hr'));
        }
        listItem.appendChild(eventDiv);
        dataList.appendChild(listItem);

        previousEventDate = date;
    });
}

(async () => {
    await displayEvents();
})();