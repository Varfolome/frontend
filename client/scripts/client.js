'use strict'

console.log("Client hello");

const contactForm = document.querySelector('.contact-form');
const faqForm = document.querySelector('.faq-form');
const API_URL = 'http://localhost:5000/contacts';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
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
