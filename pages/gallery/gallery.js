//Needs to be here, because reading from a json file gives a cors error
const data = {
    events: [
        {
            title: "Concert 2022",
            images: [
                "../../assets/events/Concert 2022/DSC00004.jpg",
                "../../assets/events/Concert 2022/DSC00006.jpg",
                "../../assets/events/Concert 2022/DSC00007.jpg",
                "../../assets/events/Concert 2022/DSC00008.jpg",
                "../../assets/events/Concert 2022/DSC00010.jpg",
                "../../assets/events/Concert 2022/DSC00011.jpg",
                "../../assets/events/Concert 2022/DSC00019.jpg",
                "../../assets/events/Concert 2022/DSC00022.jpg",
                "../../assets/events/Concert 2022/DSC00030.jpg",
                "../../assets/events/Concert 2022/DSC00036.jpg",
                "../../assets/events/Concert 2022/DSC00042.jpg",
                "../../assets/events/Concert 2022/DSC00044.jpg",
                "../../assets/events/Concert 2022/DSC00045.jpg",
                "../../assets/events/Concert 2022/DSC00046.jpg",
                "../../assets/events/Concert 2022/DSC00050.jpg",
                "../../assets/events/Concert 2022/DSC00051.jpg",
                "../../assets/events/Concert 2022/DSC00053.jpg",
                "../../assets/events/Concert 2022/DSC00055.jpg",
                "../../assets/events/Concert 2022/DSC00058.jpg",
                "../../assets/events/Concert 2022/DSC00062.jpg",
                "../../assets/events/Concert 2022/DSC00064.jpg",
                "../../assets/events/Concert 2022/DSC00065.jpg",
                "../../assets/events/Concert 2022/DSC00068.jpg",
                "../../assets/events/Concert 2022/DSC00070.jpg",
                "../../assets/events/Concert 2022/DSC00071.jpg",
                "../../assets/events/Concert 2022/DSC00085.jpg",
                "../../assets/events/Concert 2022/DSC00089.jpg",
                "../../assets/events/Concert 2022/DSC00096.jpg",
                "../../assets/events/Concert 2022/DSC00119.jpg",
                "../../assets/events/Concert 2022/DSC00123.jpg",
                "../../assets/events/Concert 2022/DSC00125.jpg",
                "../../assets/events/Concert 2022/DSC00128.jpg",
                "../../assets/events/Concert 2022/DSC00129.jpg",
                "../../assets/events/Concert 2022/DSC00131.jpg",
                "../../assets/events/Concert 2022/DSC00143.jpg",
                "../../assets/events/Concert 2022/DSC00145.jpg",
                "../../assets/events/Concert 2022/DSC00146.jpg",
                "../../assets/events/Concert 2022/DSC00148.jpg"
            ]
        },
        {
            title: "Staudammfest 2018",
            images: [
                "../../assets/events/Staudammfest 2018/DSCI2976.JPG",
                "../../assets/events/Staudammfest 2018/DSCI2981.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1074.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1081.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1084.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1089.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1090.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1094.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1102.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1109.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1136.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1140.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1141.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1143.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1159.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1199.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1236.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1243.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1389.JPG",
                "../../assets/events/Staudammfest 2018/IMG_1394.JPG"
            ]
        },
        {
            title: "Staudammfest 2017",
            images: [
                "../../assets/events/Staudammfest 2017/IMG_0870.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0871.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0873.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0877.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0878.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0879.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0884.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0893.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0895.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0896.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0918.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0921.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0949.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0950.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0959.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0987.JPG",
                "../../assets/events/Staudammfest 2017/IMG_0990.JPG"
            ]
        },
        {
            title: "Staudammfest 2010",
            images: [
                "../../assets/events/Staudammfest 2010/031.jpg",
                "../../assets/events/Staudammfest 2010/032.jpg",
                "../../assets/events/Staudammfest 2010/033.jpg",
                "../../assets/events/Staudammfest 2010/034.jpg",
                "../../assets/events/Staudammfest 2010/035.jpg",
                "../../assets/events/Staudammfest 2010/036.jpg",
                "../../assets/events/Staudammfest 2010/037.jpg",
                "../../assets/events/Staudammfest 2010/038.jpg",
                "../../assets/events/Staudammfest 2010/039.jpg",
                "../../assets/events/Staudammfest 2010/043.jpg",
                "../../assets/events/Staudammfest 2010/044.jpg",
                "../../assets/events/Staudammfest 2010/045.jpg",
                "../../assets/events/Staudammfest 2010/048.jpg",
                "../../assets/events/Staudammfest 2010/049.jpg",
                "../../assets/events/Staudammfest 2010/050.jpg",
                "../../assets/events/Staudammfest 2010/051.jpg",
                "../../assets/events/Staudammfest 2010/052.jpg"
            ]
        },
        {
            title: "Trip 2013",
            images: [
                "../../assets/events/Trip 2013/2.jpg",
                "../../assets/events/Trip 2013/5.jpg",
                "../../assets/events/Trip 2013/7.jpg",
                "../../assets/events/Trip 2013/56.jpg",
                "../../assets/events/Trip 2013/60.jpg",
                "../../assets/events/Trip 2013/63.jpg",
                "../../assets/events/Trip 2013/64.jpg",
                "../../assets/events/Trip 2013/67.jpg",
                "../../assets/events/Trip 2013/69.jpg",
                "../../assets/events/Trip 2013/70.jpg",
                "../../assets/events/Trip 2013/72.jpg",
                "../../assets/events/Trip 2013/76.jpg",
                "../../assets/events/Trip 2013/82.JPG"
            ]
        },
    ]
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

let imagesToAdd = 6;

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

// Generate the gallery
async function generateGallery() {
    const gallery = document.getElementById("gallery-container");
    gallery.innerHTML = '';

    const data = await fetchJsonData();

    data.events.forEach((event) => {

        let imagesShown = 6
        if(window.innerWidth < 990) {
            imagesShown = 3;
            imagesToAdd = 3;
        }

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
        showMore.classList.add("btn", "btn-primary", "gallery-show-more-button", "button-coloring");
        showMore.ariaLabel = "Show more images";
        showMore.textContent = "Show more";

        // Create the row in which the title comes
        const showMoreRow = document.createElement("div");
        showMoreRow.classList.add("row", "gallery-show-more-row");
        showMoreRow.appendChild(showMore);

        showMore.addEventListener("click", () => {
                imagesShown += imagesToAdd;
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
        let split = event.images[image].split("/");
        imageElement.alt = split[split.length - 1];
        imageElement.classList.add("w-100", "shadow-1-strong", "rounded", "mb-4");

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
window.addEventListener("resize", generateGallery);

// Attach an event listener to close the lightbox on click
const lightboxCloseButton = document.getElementById("lightbox-close-button");
lightboxCloseButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", closeLightbox);