const fontSizeInfoEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const fontSizeHandler = (event) => {
    textEl.style.fontSize =`${event.currentTarget.value}px`;
}

fontSizeInfoEl.addEventListener('input', fontSizeHandler);