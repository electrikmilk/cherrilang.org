/*
 * Copyright (c) Brandon Jordan
 */

window.onload = () => {
    const codes = document.querySelectorAll('.language-ruby, .language-javascript');
    codes.forEach(highlight => {
        const iframe = document.createElement('iframe');
        iframe.frameBorder = '0';
        iframe.height = '250px';
        iframe.style.width = '100%';
        iframe.loading = 'lazy';
        iframe.onload = () => {
            iframe.style.height = iframe.contentWindow.outerHeight + 'px';
        };
        iframe.src = 'https://playground.cherrilang.org/preview?code=' + encodeURIComponent(highlight.innerText);
        highlight.appendChild(iframe);
    });
};
