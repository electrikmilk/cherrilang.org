/*
 * Copyright (c) Cherri
 */

window.onload = () => {
    setTimeout(() => {
        const codes = document.querySelectorAll('.language-ruby, .language-javascript');
        codes.forEach(highlight => {
            const encodedSrc = encodeURIComponent(highlight.innerText)
            
            const iframe = document.createElement('iframe');
            iframe.frameBorder = '0';
            iframe.loading = 'lazy';
            iframe.title = 'Shortcut Preview';
            iframe.src = 'https://playground.cherrilang.org/preview?code=' + encodedSrc;
            highlight.appendChild(iframe);
            
            const tryMe = document.createElement('a');
            tryMe.href = 'https://playground.cherrilang.org/?code=' + encodedSrc;
            tryMe.classList.add('btn', 'btn-red', 'm-3');
            tryMe.innerHTML = 'Try Me!';
            highlight.appendChild(tryMe);
        });
    }, 700);
};
