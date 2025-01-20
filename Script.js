document.getElementById("meeting").addEventListener("submit", function (e) {
    e.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("number").value;
    const reasonForMeeting = document.getElementById("reason").value;
    document.getElementById("formText").innerHTML = "Thank you "+ name +" for filling out your contact info we will soon be in contact about the meeting time. Make sure to keep an eye on your email at: "+ email +"";
    this.reset();
});