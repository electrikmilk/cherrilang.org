/*
 * Copyright (c) Brandon Jordan
 */

window.onload = () => {
    const codes = document.querySelectorAll('.language-ruby');
    codes.forEach(highlight => {
        const iframe = document.createElement('iframe');
        iframe.frameBorder = '0';
        iframe.height = '250px';
        iframe.style.width = '100%';
        iframe.src = 'https://playground.cherrilang.org/preview?code=' + encodeURIComponent(highlight.innerText);
        highlight.appendChild(iframe);
    });
};
