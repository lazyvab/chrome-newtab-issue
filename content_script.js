chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "CHANGE_BG") {
    document.body.style.background = "yellow";
  }
});

console.log("### Notifying background from page: " + location.href);
chrome.runtime.sendMessage({ action: "NOTIFY_CONTENT_SCRIPT_LOADED", pageURL: location.href });
