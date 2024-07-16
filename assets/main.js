

let typed_one = new Typed('#element', {
    strings: ['Every Platform', 'One Home', 'WhosLive', 'Every Streamer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '_',
    preStringTyped: function(pos, self) {
      if (pos === 2) { // 1 corresponds to the second string in the array
          self.el.classList.add('special-font');
      } else {
          self.el.classList.remove('special-font');
      }
  }
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const emailInput = document.getElementById('email');
    const emailMobile = document.getElementById('emailMobile');
    const doneBtn = document.getElementById('doneBtn');


    openModalButton.addEventListener('click', () => {
        modalOverlay.classList.add('show');
    });

    doneBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });

    
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        emailInput.value = '';
        modalOverlay.classList.add('show');
      });
    });
    
    var form_mobile = document.getElementById('sheetdb-form-mobile');
    form_mobile.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form_mobile.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form-mobile")),
      }).then(
          response => response.json()
      ).then((html) => {
        emailMobile.value = '';
        modalOverlay.classList.add('show');
      });
    });

});

