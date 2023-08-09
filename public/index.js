const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

const showOverlayButton = document.querySelector('#showOverlay');
const overlay = document.querySelector('#overlay');

showOverlayButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
  });