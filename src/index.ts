(() => {
    "use strict";

    // look for the current url
    const currentUrl = window.location.href;

    // if the url contains "npmjs.com", redirect to "npmx.dev/..."
    if (currentUrl.includes("npmjs.com")) {
        const newUrl = currentUrl.replace("npmjs.com", "npmx.dev");
        window.location.href = newUrl;
    }
})();