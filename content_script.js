if (window.top === window) {
  console.log("### Notifying background from page: " + location.href);
  
  chrome.runtime.sendMessage({ action: "NOTIFY_CONTENT_SCRIPT_LOADED" }, () => {
    console.log("### Notified background from page: " + location.href);
  });
}
