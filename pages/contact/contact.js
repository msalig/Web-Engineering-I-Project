const contactForm = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const instrument = document.getElementById("instrument");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

firstName.addEventListener("focusout", updateMailString);
surname.addEventListener("focusout", updateMailString);
email.addEventListener("focusout", updateMailString);
instrument.addEventListener("focusout", updateMailString);
subject.addEventListener("focusout", updateMailString);
message.addEventListener("focusout", updateMailString);

contactForm.addEventListener("submit", (e) => {
    firstName.value = ''
    surname.value = ''
    email.value = ''
    instrument.value = ''
    subject.value = ''
    message.value = ''
});

function updateMailString() {
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const instrument = document.getElementById("instrument").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let mail = "mailto:info@musikverein-oberkessach.de?subject="
        + subject
        + "&body="
        + "Hello Musikverein Oberkessach, %0D%0A%0D%0A Message: %0D%0A"
        + message
        + "%0D%0A%0D%0A Yours sincerely %0D%0A%0D%0A"
        + firstName + " " + surname + "%0D%0A%0D%0A"
        + "Email: " + email + "%0D%0A"

    if (instrument != null) {
        mail += "Playing the " + instrument
    }

    contactForm.setAttribute("action", mail);
}