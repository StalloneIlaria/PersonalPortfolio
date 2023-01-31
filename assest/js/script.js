ScrollReaveal().reveal('homePage');
ScrollReaveal().reveal('box');

//CONTACT FORM

// listen to the form submission
document
    .getElementById("myForm")
    .addEventListener("Send", function (event) {
        event.preventDefault();

        const serviceID = "service_3ribd77";
        const templateID = "template_ufupp49";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Thanks for your message!...I will get back to you as soon as possible!");
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Ops...Looks like something went wrong!", error);
            }
        );
    });
