/*
 * Copyright (c) Cherri
 */

window.onload = () => {
    setTimeout(loadPreviews, 1000)
};

function loadPreviews() {
    const codes = document.querySelectorAll('.language-ruby, .language-javascript');
    codes.forEach(highlight => {
        const encodedSrc = encodeURIComponent(highlight.innerText);
        let frameURL = 'https://playground.cherrilang.org/preview?code=' + encodedSrc;

        if (highlight.classList.contains('language-javascript')) {
            frameURL += '&header=1';
        }

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
        iframe.src = frameURL;
        iframe.title = 'Shortcut Preview';

        highlight.appendChild(iframe);

        const parentElement = highlight.parentNode;
        parentElement.insertBefore(wrapper, highlight);
        wrapper.append(highlight, tryMe);
    });
    window.removeEventListener('scrollend', loadPreviews)
}
