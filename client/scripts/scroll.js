'use strict'

$(document).ready(function() {

  const forms = document.querySelector('.forms');
  const body = document.querySelector('body');

  let bodyH = body.clientHeight;
  let wH = window.innerHeight;
  let mark = bodyH - wH - 1;

  console.log(mark);

  forms.style.display = 'none';

window.onscroll = function() {
    if(document.body.scrollTop > mark || document.documentElement.scrollTop > mark) {
      //console.log($('body').scrollTop);
      forms.style.top = '0';
      //forms.height = wH + 'px';
      forms.style.paddingTop = (mark + 20) + 'px';
      forms.style.display = '';

    } else {
      forms.style.display = 'none';
    }
  };
});
