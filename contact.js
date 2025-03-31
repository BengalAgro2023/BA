// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});




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
            


