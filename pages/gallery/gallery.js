const data = {
    events: [
        {
            title: "Staudammfest 2010",
            images: [
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/031.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/032.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/033.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/034.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/035.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/036.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/037.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/038.jpg",
            ]
        },
        {
            title: "Staudammfest 2011",
            images: [
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/031.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/032.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/033.jpg",
                "../../assets/Bilder Musikverein/events/Staudammfest 2010/034.jpg",
            ]
        },
    ]
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

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

// Generate the gallery
async function generateGallery() {
    const gallery = document.getElementById("gallery-container");
    gallery.innerHTML = '';

    const data = await fetchJsonData();

    data.events.forEach((event) => {
        let imagesShown = 6;

        // Create the title of the event
        const title = document.createElement("h2");
        title.className = "gallery-event-title";
        title.textContent = event.title;

        // Create the row in which the title comes
        const titleRow = document.createElement("div");
        titleRow.classList.add("row", "gallery-event-title-row");
        titleRow.appendChild(title);

        // Create the row for the images
        const imagesRow = document.createElement("div");
        imagesRow.className = "row";

        // Add 3 columns to the row
        for (let column = 0; column < 3; column++) {
            const colElement = document.createElement("div");
            colElement.classList.add("col-lg-4", "mb-4", "mb-lg-0");
            imagesRow.appendChild(colElement);
        }

        // Iterate through the images and add them to the columns
        addImages(event, imagesShown, imagesRow);

        // Create the title of the event
        const showMore = document.createElement("button");
        showMore.classList.add("btn", "btn-primary", "gallery-show-more-button");
        showMore.textContent = "Show more";

        // Create the row in which the title comes
        const showMoreRow = document.createElement("div");
        showMoreRow.classList.add("row", "gallery-show-more-row");
        showMoreRow.appendChild(showMore);

        showMore.addEventListener("click", () => {
                imagesShown += 6;
                addImages(event, imagesShown, imagesRow);
                if (event.images.length < imagesShown) gallery.removeChild(showMoreRow);
            }
        );

        gallery.appendChild(titleRow);
        gallery.appendChild(imagesRow);

        if (event.images.length > imagesShown) {
            gallery.appendChild(showMoreRow);
        }
    });
}

function addImages(event, imagesShown, imagesRow) {
    let item = 0;

    //Clear columns
    imagesRow.querySelectorAll("div").forEach((column) => column.innerHTML = '');

    for (let image = 0; image < imagesShown && event.images[image] != null; image++) {
        const imageElement = document.createElement("img");
        imageElement.src = event.images[image];
        imageElement.classList.add("gallery-image", "w-100", "shadow-1-strong", "rounded", "mb-4");

        // Attach a click event listener to the image for the lightbox
        imageElement.addEventListener("click", () => {
            openLightbox(event.images[image]);
        });

        // Append the image to one of the gallery columns
        imagesRow.querySelectorAll("div").item(item % 3).appendChild(imageElement);

        item++;
    }
}

// Create a function to open the lightbox modal
function openLightbox(imageUrl) {
    // Set the image source for the lightbox
    lightboxImage.src = imageUrl;

    // Display the lightbox
    lightbox.style.display = "flex";
}

// Create a function to close the lightbox modal
function closeLightbox() {
    // Hide the lightbox
    lightbox.style.display = "none";
}

// Generate the gallery on page load
window.addEventListener("load", generateGallery);

// Attach an event listener to close the lightbox on click
const lightboxCloseButton = document.getElementById("lightbox-close-button");
lightboxCloseButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", closeLightbox);
