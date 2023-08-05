chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "NOTIFY_CONTENT_SCRIPT_LOADED") {
    console.log("### Acknowledged notification from content script in page: ", sender.tab.url);
    sendResponse();
  }
});
