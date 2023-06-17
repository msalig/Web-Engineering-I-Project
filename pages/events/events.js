const data = {
    events: [
        {
            uuid: 1,
            title: "Dorffest Westerhausen",
            date: "18. Juni",
            timestamp: 0,
            time: "16:30 Uhr - 19:30 Uhr",
            address: "Sportplatz Westernhausen",
            description: ""
        },
        {
            uuid: 2,
            title: "Rockparty Oberkessach",
            date: "24. Juni",
            timestamp: 1623865200,
            time: "16:30 Uhr - 19:30 Uhr",
            address: "",
            description: ""
        },
        {
            uuid: 3,
            title: "Sportfest Rosenberg",
            date: "30. Juni",
            timestamp: 0,
            time: "16:30 Uhr - 19:30 Uhr",
            address: "Sportplatz Rosenberg",
            description: ""
        }
    ]
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthStrings = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

async function fetchJsonData() {
    try {
        return data;
        //TODO: Get rid of cors error
        /*
            return fetch(events.json, {
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

        const weekday = document.createElement('h3');
        weekday.setAttribute('class', 'eventWeekday');
        weekday.textContent = weekdays[date.getDay()];

        const dateParagraph = document.createElement('p');
        dateParagraph.setAttribute('class', 'date');
        dateParagraph.textContent = event.date;

        dateDiv.append(weekday, dateParagraph);

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
        if (previousEventDate == null || date > previousEventDate) {
            const month = document.createElement('h2');
            month.textContent = monthStrings[date.getMonth()];
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