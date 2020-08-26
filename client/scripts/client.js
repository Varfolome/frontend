'use strict'

console.log("Client hello");

const contactForm = document.querySelector('.contact-form');
const loading = document.querySelector('.loading');
const formsWrapper = document.querySelector('.forms-wrapper');
const API_URL = 'http://localhost:5000/contacts';

loading.style.display = 'none';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  formsWrapper.style.display = 'none';
  loading.style.display = '';

  const contactFormData = new FormData(contactForm);
  const lastName = contactFormData.get('Last-name');
  const firstName = contactFormData.get('First-name');
  const mail = contactFormData.get('mail');

  const contact = {
    lastName,
    firstName,
    mail
  };

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'content-type': 'application/json'
    }
  });
});
