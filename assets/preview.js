/*
 * Copyright (c) Cherri
 */

window.onload = () => {
  const codes = document.querySelectorAll(
    ".language-ruby, .language-javascript"
  );
  codes.forEach((highlight) => {
    const encodedSrc = encodeURIComponent(highlight.innerText);
    let frameURL =
      "https://playground.cherrilang.org/preview?code=" + encodedSrc;

    if (highlight.classList.contains("language-javascript")) {
      frameURL += "&header=1";
    }

    const wrapper = document.createElement("div");
    wrapper.className = "code-example";

    const showPreview = document.createElement("button");
    showPreview.classList.add("btn", "btn-outline");
    showPreview.innerHTML = "&#x25B6;";
    showPreview.onclick = () => {
      const iframe = document.createElement("iframe");
      iframe.frameBorder = "0";
      iframe.loading = "lazy";
      iframe.src = frameURL;
      iframe.title = "Shortcut Preview";

      highlight.appendChild(iframe);
      showPreview.remove();
    };

    const tryMe = document.createElement("a");
    tryMe.href = "https://playground.cherrilang.org/?code=" + encodedSrc;
    tryMe.target = "_blank";
    tryMe.classList.add("btn", "btn-outline");
    tryMe.innerText = "Edit in Playground";
    tryMe.onclick = () => {
      const iframe = document.createElement("iframe");
      iframe.frameBorder = "0";
      iframe.loading = "lazy";
      iframe.src = frameURL;
      iframe.title = "Shortcut Preview";

      highlight.appendChild(iframe);
    };

    const actions = document.createElement("div");
    actions.className = "code-actions";
    actions.append(showPreview, tryMe);
    highlight.prepend(actions);

    const parentElement = highlight.parentNode;
    parentElement.insertBefore(wrapper, highlight);
    wrapper.append(highlight);
  });
};
