var prompts;
var docHtml;
var config = { attributes: true, childList: true, characterData: true }

window.onload = function() {
    prompts = document.getElementById("layers");
    docHtml = document.querySelector("html");
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === "attributes") {
            docHtml.style.overflow = "auto";
        }
        if (mutation.type === "childList") {
            prompts.style.display = "none";
            docHtml.style.overflowY = "auto";
        }
    });
});

if (prompts === undefined) { prompts = document.getElementById("layers"); }
if (docHtml === undefined) { docHtml = document.querySelector("html"); }
observer.observe(prompts, config);
observer.observe(docHtml, config);

if (prompts.style.display == "none" && docHtml.style.overflow == "auto") {
    observer.disconnect();
}
