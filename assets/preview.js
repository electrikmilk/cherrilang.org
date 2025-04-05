/*
 * Copyright (c) Cherri
 */

let glyphsPosition = {
    x: 0,
    y: 0,
};

const hero = document.querySelector('.hero');

window.onload = () => {
    setTimeout(() => {
        const codes = document.querySelectorAll('.language-ruby, .language-javascript');
        codes.forEach(highlight => {
            const encodedSrc = encodeURIComponent(highlight.innerText);
            
            const wrapper = document.createElement('div');
            wrapper.className = 'code-example';

            const tryMe = document.createElement('a');
            tryMe.href = 'https://playground.cherrilang.org/?code=' + encodedSrc;
            tryMe.target = '_blank';
            tryMe.classList.add('btn', 'btn-red', 'm-3');
            tryMe.innerHTML = 'Try Me!';

            const iframe = document.createElement('iframe');
            iframe.frameBorder = '0';
            iframe.loading = 'lazy';
            iframe.title = 'Shortcut Preview';
            iframe.src = 'https://playground.cherrilang.org/preview?code=' + encodedSrc;
            highlight.appendChild(iframe);
            
            const parentElement = highlight.parentNode;
            parentElement.insertBefore(wrapper, highlight);
            wrapper.append(highlight, tryMe);
        });
    }, 1000);

    setInterval(() => {
        hero.style.backgroundPostition =  ++glyphsPosition.x + 'px ' + ++glyphsPosition.y + 'px';
    }, 10);
};
