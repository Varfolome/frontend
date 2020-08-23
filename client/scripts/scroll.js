'use strict'

$(document).ready(function() {

  const forms = document.querySelector('.forms');

  forms.style.display = 'none';

window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      //console.log($('body').scrollTop);
      forms.style.display = '';
      forms.style.position = 'absolute';
    } else {
      forms.style.display = 'none';
    }
  };
});
