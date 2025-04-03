/*
 * Copyright (c) Cherri
 */

window.onload = () => {
    setTimeout(() => {
        const codes = document.querySelectorAll('.language-ruby, .language-javascript');
        codes.forEach(highlight => {
            const iframe = document.createElement('iframe');
            iframe.frameBorder = '0';
            iframe.loading = 'lazy';
            iframe.title = 'Shortcut Preview';
            iframe.src = 'https://playground.cherrilang.org/preview?code=' + encodeURIComponent(highlight.innerText);
            highlight.appendChild(iframe);
        });
    }, 700);
};
