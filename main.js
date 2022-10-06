'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll(".popover-btn");
  var btnPoper = null;
  elements.forEach(function (element) {
    element.addEventListener('click', function(e) {
       e.preventDefault();
       let template = document.querySelector('.popover');
       let content = element.querySelector('.popover-data');
        template.style.display = "none";
        if(element.classList.contains("poper-show")) {
           element.classList.remove("poper-show");
           template.innerHTML = "";
          //if(btnPoper!= null) {
            btnPoper.destroy();
            btnPoper = null;
          //}
        } else {
          template.innerHTML = content.innerHTML;
          var btns = document.querySelectorAll(".popover-btn");
          [].forEach.call(btns, function(el) {
              el.classList.remove("poper-show");
          });
           element.classList.add("poper-show");
          template.style.display = "flex";
          btnPoper = Popper.createPopper(element, template, {
            placement: 'bottom',
          });
        }


        
      

      return true;
    });
  });
});