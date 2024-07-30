const form = document.getElementById("Form");

function sendEmail(event) {
    event.preventDefault();
    let params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    emailjs.send('service_32na85m', 'template_nmo23fq', params).then(
        (response) => {
          alert('SUCCESS!', response.status);
        }
      );
}

form.addEventListener('submit', sendEmail);

