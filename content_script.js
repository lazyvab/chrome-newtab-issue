chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "MESSAGE_FROM_BG") {
    console.log("### Received message from background", message.payload);
  }
});

console.log("### Notifying background from page: " + location.href);
chrome.runtime.sendMessage({ action: "NOTIFY_CONTENT_SCRIPT_LOADED", pageURL: location.href });
