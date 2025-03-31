const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    confirmationMessage.style.display = 'block';
    contactForm.reset();
});


        function sendMail() {
   let parms = {
      name : document.getElementById("name").value,
      subject : document.getElementById("subject").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,

      
   }
    
   emailjs.send("service_ec6v5h2","template_x7pix0e", parms);
}
            


