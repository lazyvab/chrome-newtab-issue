chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.action === "NOTIFY_CONTENT_SCRIPT_LOADED") {
    console.log(`### ACK content script in page: ${message.pageURL} and tab: ${sender.tab.url}`);
    chrome.tabs.sendMessage(sender.tab.id, { action: "MESSAGE_FROM_BG", payload: "Hello world" });
  }
});
