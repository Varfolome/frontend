'use strict'

$(document).ready(function() {

  const forms = document.querySelector('.forms');
  const body = document.querySelector('body');
  const closeButton = document.querySelector('#close');

  let bodyH = body.clientHeight;
  let wH = window.innerHeight;
  let mark = bodyH - wH;

  console.log(mark);

  forms.style.display = 'none';
  forms.style.height = wH + 'px';

  closeButton.onclick = function() {
    body.style.overflow = '';
    forms.style.display = 'none';
    document.documentElement.scrollTop = mark + 'px';
  }

window.onscroll = function() {
    if(document.documentElement.scrollTop >= mark) {

      fixForm();

    } else {
      forms.style.display = 'none';
    }
  };

  function fixForm() {
    body.style.overflow = 'hidden';
    forms.style.display = '';
    let formsH = forms.clientHeight;
    //console.log(formsH);
    //console.log(wH);
    let addPadding = wH - formsH;
    //console.log(addPadding);
    forms.style.top = '0';
    forms.style.paddingTop = (mark+40) + 'px';
  }

});
